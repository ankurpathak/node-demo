/*
- Every Javascript file is module
- Modules are encapsulated by default ie gone after execution not accessible to other module by default even after import
*/
var addFun = require('./add');
function greet(name){
    console.log(`Hey there, ${name}!`);
}

greet('Ankur');
addFun(2,3);