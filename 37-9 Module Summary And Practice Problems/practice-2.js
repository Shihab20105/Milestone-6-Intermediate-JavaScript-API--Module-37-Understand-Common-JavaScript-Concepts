/*                      37-9 Module summary and Practice Problems */

/* 
                                Practice Problem 1
                                ==================

1) If I write []==true, will it show true or false? Check it out.
2) Use === to check if the true === "true" gives true or false.
3) Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.
_____________________________________________________________________________________________

1) If I write []==true, will it show true or false? Check it out.

function checkArrayEquality() {
  return [] == true;
}

console.log(checkArrayEquality()); 
// Output: false
_____________________________________________________________________________________________

2) Use === to check if the true === "true" gives true or false.

function checkStrictEquality() {
  return true === "true";
}

console.log(checkStrictEquality()); 
// Output: false
_____________________________________________________________________________________________

const isNumber = (value) => !isNaN(value);

// Examples
console.log(isNumber(123));     // true
console.log(isNumber("123"));   // true (string that can be converted to number)
console.log(isNumber("hello")); // false
console.log(isNumber(true));    // true (true → 1, which is a number)
console.log(isNumber(undefined)); // false

Output:
true
true
false
true
false

//=========================================================================================//


                                Practice Problem 2
                                ==================

Change the value stored in the storeFalsyValue variable to a falsy value, such that the code in the else statement executes.

let storeFalsyValue = true;
if(storeFalsyValue){
  console.log('Nothing to show!');
}
else {
  console.log('You are amazing!');
}
_________________________________________________________

function checkFalsyValue() {
  let storeFalsyValue = 0; // changed to a falsy value

  if (storeFalsyValue) {
    console.log('Nothing to show!');
  } else {
    console.log('You are amazing!');
  }
}

checkFalsyValue();

Output: You are amazing!

//=========================================================================================//

                              Practice Problem 3
                              ==================

Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third parameter will be a string) that will perform arithmetic operation depending on the third parameter and will print the result. For example:

1. Print result of num1+num2 if operation is "add"
2. Print result of num1-num2 if operation is "subtract"
3. Print result of num1*num2 if operation is "multiply"
4. Print result of num1/num2 if operation is "divide"
5. Print result of num1%num2 if operation is "modulus"
6. Else print "Invalid operation"


const calculate = (num1, num2, operation) => {
  if (operation === "add") {
    console.log(num1 + num2);
  } else if (operation === "subtract") {
    console.log(num1 - num2);
  } else if (operation === "multiply") {
    console.log(num1 * num2);
  } else if (operation === "divide") {
    console.log(num1 / num2);
  } else if (operation === "modulus") {
    console.log(num1 % num2);
  } else {
    console.log("Invalid operation");
  }
};

// Examples
calculate(10, 5, "add");       // 15
calculate(10, 5, "subtract");  // 5
calculate(10, 5, "multiply");  // 50
calculate(10, 5, "divide");    // 2
calculate(10, 5, "modulus");   // 0
calculate(10, 5, "power");     // Invalid operation

Output:
15
5
50
2
0
Invalid operation
*/



