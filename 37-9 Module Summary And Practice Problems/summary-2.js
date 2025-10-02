/*                      37-9 Module summary and Practice Problems */


/*
                                    SCOPE ERRORS
                                    ============

> function function name(){
      var x = 10 ;                                      |--------->Scope of the function
      let xx = 11 //defined throughout the function     |
      if(true){                                         |
          var y = 20 //function scoped             |----|----->Scope of the if-block
          let yy = 22 ; //yy is not defined outside|    |
      }                                                 |
      console.log(x,xx);                                |
      //y is defined as 'var' is function scoped        |
      //yy is not defined as let is block scoped        |
      console.log(y,yy); //yy-> Reference Error         |
  }
< undefined
> function_name()
  10 11                                                             VM85:8
  Uncaught ReferenceError: yy is not defined(...)                  VM85:11
>


//=========================================================================================//


                                HOISTING
                                ========

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.

                       ^    x = 1 ;
    Declaration        ^    alert('x = ' + x);
    moves to top       ^    var x;

_____________________________________________________________________________________________


                                MORE ABOUT HOISTING
                                ===================

All variable declarations (var, let, and const) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.

VAR:                            LET:                                CONST:
console.log(d);                 console.log(d);                     console.log(d);
var d = 5                       let d = 5                           const d = 5 ;
//Output:                       //Output:                           //Output:
undefined                       ReferenceError: Cannot              ReferenceError: Cannot 
                                access 'd' before                   access 'd' before
                                initialization                      initialization

_____________________________________________________________________________________________


                                HOISTING IN FUNCTION
                                ====================

Only function declarations are hoisted in JavaScript, function expressions are not hoisted. JavaScript only hoist declarations, not initializations (assignments).
For example:

displayMessage();
function displayMessage(){
    console.log("Hello World");
}
// Output:
Hello World

* This code will work
______________________________

displayMessage();
var displayMessage = function(){
console.log("Hello World");
};
// Output:
TypeError: displayMessage is not a function

* This code won't work

_____________________________________________________________________________________________


                                    HOISTING AND SCOPE
                                    ==================

for(var x = 0; x < 10; x++){                
  var y = x;                                 
}                                           
 
console.log('x value is: ' + x);|----->here values of x and y will be accessible
console.log('y value is: ' + y);|      as there are made globally available by
                                       JavaScript compiler - variable hoisting
for(let a = 0 ; a < 10; a++){
  let b = a;
}

console.log('a value is: ' + a);|----->here 'a' and 'b' both variables
console.log('b value is: ' + b);|      scope is restricted as they are of type 'let'
*/