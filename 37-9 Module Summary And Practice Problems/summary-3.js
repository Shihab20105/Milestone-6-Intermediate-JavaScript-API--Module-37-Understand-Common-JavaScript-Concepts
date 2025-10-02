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


*/