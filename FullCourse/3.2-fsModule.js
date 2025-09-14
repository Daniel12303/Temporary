
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

console.log("stst")

//writeFile('./FullCourse/content/first.exe')


//