/*                      37-5 Block scope global scope simple understanding of Hoisting */

/*
for (var i = 0; i < 5; i++){
    console.log(i);
} 
console.log('Outside',i);

Output:
0
1
2
3
4
Outside 5





for (let i = 0; i < 5; i++){
    console.log(i);
} 
console.log('Outside',i);
/*
Output:
console.log('Outside',i);
                      ^

ReferenceError: i is not defined
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\hoisting.js:24:23)





print5();
for (let i = 0; i < 5; i++){
    // console.log(i);
} 
// console.log('Outside',i);

function print5(){
    console.log('Inside print5',5);
}

// Output: Inside print5 5







print5();
print10();
for (let i = 0; i < 5; i++){
    // console.log(i);
} 
// console.log('Outside',i);

function print5(){
    console.log('Inside print5',5);
}

const print10 = function(){
    console.log('Inside print10', 10);
}

Output:
print10();
^

ReferenceError: Cannot access 'print10' before initialization
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\hoisting.js:56:1)







print5();
print10();
for (let i = 0; i < 5; i++){
    // console.log(i);
} 
// console.log('Outside',i);

function print5(){
    console.log('Inside print5',5);
}

var print10 = function(){
    console.log('Inside print10', 10);
}

Output:
print10();
^

TypeError: print10 is not a function
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\hoisting.js:84:1)
*/






// print5();
console.log(print10);
print10();
for (let i = 0; i < 5; i++){
    // console.log(i);
} 
// console.log('Outside',i);

function print5(){
    console.log('Inside print5',5);
}

var print10 = function(){
    console.log('Inside print10', 10);
}
/*
Output:
print10();
^

TypeError: print10 is not a function
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\hoisting.js:113:1)
*/