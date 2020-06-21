/*
- Every Javascript file is module
- Modules are encapsulated by default ie gone after execution not accessible to other module by default even after import
*/
var { add, subtract} =  require('./add');
function greet(name){
    console.log(`Hey there, ${name}!`);
}

greet('Ankur');
add(2,3);