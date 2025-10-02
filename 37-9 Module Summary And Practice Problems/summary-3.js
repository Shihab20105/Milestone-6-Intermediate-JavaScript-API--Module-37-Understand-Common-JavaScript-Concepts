/*                      37-9 Module summary and Practice Problems */

/* 
                            VAR VS CONST VS LET
                            ===================

KEYWORD:      SCOPE:      CAN BE REDECLARED:       CAN BE REASSIGNED:      HOISTING BEHAVIOR:
var           function          yes                      yes               initialized with 
              & global                                                          undefined
let           block              no                      yes                uninitialized
const         block              no                      no                 uninitialized

//=========================================================================================//


                                    CLOSURE
                                    =======

Closure means that an inner function always has access to the variables of its outer function. In the example, we have three functions - 'grandParent()', 'parent()' and 'child()' nested inside each other with variables home, car and scooter respectively. The 'child()' function will be able to access variables house and car.


function grandParent() {
    let house = 'GreenHouse';

    function parent() {
        let car = 'Tesla';
        house = 'YellowHouse';

        function child() {                              |
            let scooter = 'Vespa';                      |---->Closure
            console.log('I have:', house, car, scooter);|
        }                                               |
        return child;
    }
    return parent;
}


For Example If you have house you can live in your house. Also if you parents has house you can live that house and Also if Your grandparent have house so you can live that house as well.
______________

grandparent()
   ^
parent()
   ^
child()

_____________________________________________________________________________________________
                                    

                                    CLOSURE
                                    =======

let a = 10 ;                        |--------------->Global Scope
function f(param1){            |----|-------->function 'f'
    let b = param1;            |    |
    return function n(){  |----|----|---->function 'n'
        let c = 10        |    |    |
        let d = a + b + c;|    |    |
        return d;         |    |    |
    }                     |    |    |
}                              |    |
const k = f(20);                    |            
console.log(k());                   |         //function 'f' returns function 'n'

// Output: 40

____________________________________________________________________________________


let a = 10;                         // Global scope variable

function f(param1) {                // Function f
    let b = param1;                 // Local variable b in f
    return function n() {           // Inner function n (closure)
        let c = 10;                 // Local variable c in n
        let d = a + b + c;          // Uses a (global), b (f), c (n)
        return d;                   // Returns the sum
    }
}

const k = f(20);                    // f(20) returns function n
console.log(k());                   // Calls n()

// Output: 40

//=========================================================================================//


                                 CALLBACK FUNCTION
                                 =================

A CALLBACK FUNCTION IS A FUNCTION THAT IS PASSED AS AN ARGUMENT TO ANOTHER FUNCTION, TO BE "CALLED BACK" AT A LATER TIME.

function showMessage(s){
    s();                   ----------->//message ()
}
function message(){
    console.log("Hello");
}

showMessage(message);

_____________________________________________________________________________________________

                                    CALLBACK FUNCTION
                                    =================

function numberOne(){
    console.log("numberOne is called");
}

function numberTwo(callback){          -----------------> Callback function
    console.log("numberTwo is called");
    callback();
}
numberTwo (numberOne);                 ------------------> Callback function

Output:
numberTwo is called
numberOne is called
*/
