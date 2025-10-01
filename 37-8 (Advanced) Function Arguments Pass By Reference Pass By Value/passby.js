/*                  37-8 (advanced) function arguments pass by reference pass by value */

/*
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    const result = a * b;
    return result; 
}

const output = multiply(num1, num2);
console.log(output);

Output: 35






let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result; 
}

const output = multiply(num1, num2);
console.log(output);

Output: 189






let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result; 
}

console.log(num1);
const output = multiply(num1, num2);
console.log(output);

Output:
5
189






let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result; 
}

console.log(num1);
const output = multiply(num1, num2);
console.log(output);

let student1 = {name: 'Tom', partner: 'Jenny'};
let student2 = {name: 'Luke', partner: 'Ella'};

function makeMovie(couple1, couple2){
    couple1.name = 'Adam';
}

console.log(student1);
makeMovie(student1, student2);

Output:
5
189
{ name: 'Tom', partner: 'Jenny' }







let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result; 
}

console.log(num1);
const output = multiply(num1, num2);
console.log(output);

let student1 = {name: 'Tom', partner: 'Jenny'};
let student2 = {name: 'Luke', partner: 'Ella'};

function makeMovie(couple1, couple2){
    couple1.name = 'Adam';
    couple2.partner = 'Millie';
}

console.log(student1, student2);
makeMovie(student1, student2);

Output:
5
189
{ name: 'Tom', partner: 'Jenny' } { name: 'Luke', partner: 'Ella' }








let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result; 
}

console.log(num1);
const output = multiply(num1, num2);
console.log(output);

let student1 = {name: 'Tom', partner: 'Jenny'};
let student2 = {name: 'Luke', partner: 'Ella'};

function makeMovie(couple1, couple2){
    couple1.name = 'Adam';
    couple2.partner = 'Millie';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

Output:
5
189
{ name: 'Tom', partner: 'Jenny' } { name: 'Luke', partner: 'Ella' }
{ name: 'Adam', partner: 'Jenny' } { name: 'Luke', partner: 'Millie' }
*/




// primitive types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result; 
}

console.log(num1);
multiply(num1, num2);
console.log(num1);

// object and array are pass by  reference
let student1 = {name: 'Tom', partner: 'Jenny'};
let student2 = {name: 'Luke', partner: 'Ella'};

function makeMovie(couple1, couple2){
    couple1.name = 'Adam';
    couple2.partner = 'Millie';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

/* 
Output:
5
5
{ name: 'Tom', partner: 'Jenny' } { name: 'Luke', partner: 'Ella' }
{ name: 'Adam', partner: 'Jenny' } { name: 'Luke', partner: 'Millie' }
*/
