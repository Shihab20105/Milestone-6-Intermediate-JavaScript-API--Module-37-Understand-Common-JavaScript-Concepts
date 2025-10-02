/*                      37-9 Module summary and Practice Problems */



/*
                                    Data Types in JS
            ______________________________|_________________________________
            |                                                               |
    Primitive Types                                             Composite/Non-Primitive Types
    _____________________________________                       ___________________________
    |      |     |                |     |                       |                         |
numbers strings boolean         null undefined                 objects                 arrays
                                  ^      ^
                            Also know as Trivial / Other
                                    Data types


//========================================================================================//


                                PRIMITIVE REFERENCE TYPE
                                ========================

   Values:                                                      Output:

let a = 1                      |        a-->1 |                  a = 1
let b = a;                     | --->   b-->1 |                  b = 1
console.log("a =",a,"b =", b); |              |


_____________________________________________________________________________________________


                                NON-PRIMITIVE REFERENCE TYPE
                                ============================


let a = { job: "web developer" }; |    
let b = a;                        |   a ---> job "web developer"
console.log(a, b);                |   b --->
                   //output:
        { job; 'web developer' } { job: 'web developer' }

//========================================================================================//


                        FALSY VS TRUTHY
                        ===============

           Falsy values:             Truthy values:                                      
           false                     'false' (quoted false)
           0 (zero)                  '0' (quoted zero)
           " (empty string)           () (empty functions)
           null                       [] (empty arrays)
           undefined                  {} (empty objects)
           NaN                        All other values

//=========================================================================================//


                                NULL VS UNDEFINED
                                =================
* No value on purpose                               * It is declared but not defined
let number = null;                                   let number;
console.log(number);                                 console.log(number);
//output: null                                       //output: undefined

//=========================================================================================//


                          ==  VS ===

                                        number  string
                                         |      |
   5 = '5' ---->(Same value)             5 === '5'    ---->(Same value)
      |                                     |         ---->(Different type)
    true                                  false

//=========================================================================================//


                                        SCOPE
                                        =====

Scope determines the accessibility (visibility) of variables.JavaScript has 3 types of scope:

Block scope, Function scope and Global scope.

let year = '2020'; |---------------------> Global Scope
function theYear(){             |
     let text = "The year is"   |--------> Function Scope
     return text + " " + year;  |
}                               |
if(1020){                  |
     let greeting = "hi";  |-------------> Block Scope
     return greeting;      |
}                          |
*/