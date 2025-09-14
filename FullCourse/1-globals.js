/*
__dirname - path to current directory
__filename - file name
require - functon to use modules (CommonJS)
module - info about current module (file)
process - info about the environment where the program is being executed
    - In order to make decisions depending on the environment it is running on
*/

console.log(__dirname);

setInterval(()=>{
    console.log("hello");
},500)

// You can use setInterval and setTimeout in node