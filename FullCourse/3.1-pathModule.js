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
