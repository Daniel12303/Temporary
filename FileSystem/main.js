console.log(`\n`)

const readline = require('node:readline');
const { readFile, writeFile } = require('fs');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let logDay = 1;
let unCreated = false;

reader.question(`What day are you logging today?`, day => {
    logDay = day;

    readFile(`./FileSystem/Notes/Day-${logDay}.txt`, "utf8", (err, result) => {
        if (err) {
            unCreated = true
        }

        result == "" || unCreated == true ? console.log(`\nThe Day's Log is:\nnot yet filled!`) : console.log(`The Day's Log is:\n${result}`)

        reader.question('\nWould you like to fill it now? (Y or N): ', decision => {
            decision == `Y` ? logIn() : console.log(`\nOkay! Next time then.`);
        });

    });
});


function logIn() {
    console.clear()

    reader.question(`\nEnter in your log:\n`, logString => {
        writeFile(`./FileSystem/Notes/Day-${logDay}.txt`, logString + `\n\n`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }

            console.clear()

            readFile(`./FileSystem/Notes/Day-${logDay}.txt`, 'utf8', (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log(`\nDay-${logDay} Log:\n\n${result}`)
            });
        });
    });
}

console.log(`\n`)

console.log('sts')