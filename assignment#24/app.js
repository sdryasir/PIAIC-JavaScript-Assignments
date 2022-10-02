//Tests for equality and inequality with strings

let username = 'YASIR';
let age = 33;

console.log(username === 'YASIR') //true
console.log(age >= 40) //false

//Tests using the lower case function
console.log(username.toLowerCase() == 'yasir')//true


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(age >= 33) //true
console.log(age <= 33) //true
console.log(age == 33) //true
console.log(age != 33) //false
console.log(age > 30) //true
console.log(age < 40) //true


//Tests using "and" and "or" operators
console.log(username == 'YASIR' && age == 33)//true
console.log(username == 'YASIR' || age> 40)//true

//Test whether an item is in a array
let names = ['yasir', 'ali', 'hassan'];
console.log('item is in a array', names.includes('ali'))//true
console.log('item is not in an array', !names.includes('Ahmed'))//true