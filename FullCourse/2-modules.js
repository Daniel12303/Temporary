/*
Your code will be split into different modules but run on one file

CommonJS, every file is module by default
Modules - Encapsulated Code (only share what we want between the files)
*/

const names = require('./2.1-vars')
//console.log(names)
// The names from the vars module was exported into the names objects


const sayHi = require('./2.2-functions')

const data = require('./2.3-alternativeModuleLayout')
//console.log(data);

//sayHi("susan");
//sayHi(john);
//sayHi(peter);


//sayHi("susan")
//sayHi(names.john)
//sayHi(names.peter)

// or const {john} = require('./2.1-vars')


// default layout
// modules.export = {var, var}
// const var = require('./link)

require('./2.4-mindGrenade');
// even without assigning it to a variable, the functions inside the imported module will run