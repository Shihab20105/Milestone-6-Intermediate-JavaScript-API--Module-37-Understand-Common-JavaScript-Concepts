/*                  37-8 (advanced) function arguments pass by reference pass by value */


/*
function sum(a, b, c){
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12);
console.log(total);

// Output: 146







function sum(a, b, c){
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

// Output: 146







function sum(a, b, c){
    // console.log(arguments);
    const result = a + b + c;
    return result;
}

console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

Output:
[Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: {
      id: '.',
      path: 'D:\\Web Development\\Milestone-6 Intermediate JavaScript, API\\Module-37 Understand Common JavaScript Concepts\\37-8 (Advanced) Function Arguments Pass By Reference Pass By Value',
      exports: {},
      filename: 'D:\\Web Development\\Milestone-6 Intermediate JavaScript, API\\Module-37 Understand Common JavaScript Concepts\\37-8 (Advanced) Function Arguments Pass By Reference Pass By Value\\arguments.js',
      loaded: false,







function sum(a, b, c){
    console.log(arguments);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

Output:
[Arguments] { '0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56 }
146








function sum(a, b, c){
    console.log(arguments[4]);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

Output: 
98
146








function sum(a, b, c){
    console.log(typeof arguments);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

Output:
object
146








function sum(a, b, c){
    // console.log(typeof arguments);
    arguments.push(45);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

Output:
arguments.push(45);
              ^

TypeError: arguments.push is not a function
    at sum (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-8 (Advanced) Function Arguments Pass By Reference Pass By Value\arguments.js:130:15)
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-8 (Advanced) Function Arguments Pass By Reference Pass By Value\arguments.js:136:15)






// array like object
function sum(a, b, c){
    // console.log(typeof arguments);
    // arguments.push(45);
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

Output:
[ 45, 89, 12, 45, 98, 56 ]
146







// array like object
function sum(a, b, c){
    // console.log(typeof arguments);
    // arguments.push(45);
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);

Output: [ 45, 89, 12, 45, 98, 56 ]








// array like object
function sum(a, b, c){
    // console.log(typeof arguments);
    // arguments.push(45);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(typeof sum);

Output: function
*/






// array like object
function sum(a, b, c){
    // console.log(typeof arguments);
    // arguments.push(45);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);

// Output: 3








