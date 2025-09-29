/*                      37-2 Null Vs Undefined, different ways you will get undefined */

/* 
8 ways to get undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined 
5. property that does not exists on an object will give you undefined 
6. accessing array elements outside of the index range will give you undefined
7. deleting an element inside an array
8. set a value directly to undefined 
*/

/*
let first;
console.log(first);
// Output: undefined
*/




/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();
console.log(result);
// Output: undefined
*/





/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);
// console.log(result);

// Output: 2 5 undefined undefined
*/






/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, 5);
console.log(total);

Output:
2 5 undefined undefined
7
*/






/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
console.log(total);

Output:
2 5 undefined undefined
undefined
*/






/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = {id: 2, name: 'ponchom', age: 40}
console.log(fifth.age, fifth.salary);
 
Output: 
2 5 undefined undefined
40 undefined
*/








/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[200]);

Output: 
2 5 undefined undefined
89 undefined undefined
*/







/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead you should use splice 
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);

Output:
2 5 undefined undefined
undefined undefined undefined
*/








/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead you should use splice
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth);

Output:
2 5 undefined undefined
undefined undefined undefined
[ 4, <1 empty item>, 87, 56, 54 ]
*/






/*
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead you should use splice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

const eighth = undefined;

const ninth = null;

const data = {results: [], updated: null};

console.log(typeof undefined);

// Output: undefined
*/






let first;

function second(a, b){
    const total = a + b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}

third(2, 5);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead you should use splice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

const eighth = undefined;

const ninth = null;

const data = {results: [], updated: null};

// console.log(typeof undefined);
console.log(typeof null);

// Output: object