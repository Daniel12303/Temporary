/*

BUILT-IN MODULES
OS
PATH
FS
HTTP

*/

//OS MODULE

const { log } = require('console');
const os = require('os');
//os in the link portion
//you can also destructure the os
//os.method

//shows the user info
const user = os.userInfo();
//console.log(user);

//method returns the system uptime in seconds
//console.log(`The System Uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

//console.log(currentOS)

//PATH MODULE
const path = require('path')
//console.log(path.sep)
// the platfrom path separatork

const filePath = path.join('/content', 'subfolder', 'test.txt')
//console.log(filePath)
//joins paths

const base = path.basename(filePath)
//console.log(base)
//selects the last part of the path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
//console.log(absolute);
//you will get the absolute path of a file

//Fs
// Interacts with a file system
// This can be performed synch and asynch

//ASYNCK
const { readFileSync, writeFileSync } = require('fs');
// only accessing the readFileSync, and writeFileSync
// readFileSync reads files

let first = readFileSync('./FullCourse/content/first.txt', 'utf8');
// readFileSync takes two parameters, filepath, and decoding

const second = readFileSync('./FullCourse/content/second.txt', 'utf8');

//console.log(first, second);


//writeFileSync('./FullCourse/content/first.txt', 'Hi There')
//takes two parameters, file path, and text
//writeFileSync('./FullCourse/content/first.txt', 'Hi There', { flag: 'a' })
// while if you pass in {flag:'a'}, it will append the text
first = readFileSync('./FullCourse/content/first.txt', 'utf8');
//console.log(first);



//ASYNCHRONOUS
const { readFile, writeFile } = require('fs')
// we need to have a callback, or whenever the functionality we are doing is conplete, we run the callback

readFile('./FullCourse/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    let fileContent = result;
    readFile('./FullCourse/content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }

        writeFile('./FullCourse/content/first.txt', 'Hello there again', { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result)
        });
    })
})

readFile('./FullCourse/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result)
})


//writeFile('./FullCourse/content/first.exe')


//