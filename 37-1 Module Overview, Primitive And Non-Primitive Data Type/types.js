/*                      37-1 Module Overview, Primitive and non-primitive data type */


//Strongly typed language
// int a = 5;
// string b = 'tom jonson harry';
// bool c = True;
// object student = {name: adam smith, id: 55};
// int[] numbers = [12, 45, 78];
// string[] friends = ['emma', 'ella'];

/*
// JavaScript is a Dynamic typed language
const a = 5;
const b = 'tom not going to his work anymore';
const ages = [45, 65, 48];
const student = {id: 23, class: 7};
console.log(typeof a, typeof b, typeof ages, typeof student);

// Output: number string object object
*/



/*
const a = 5;
const b = 'tom not going to his work anymore';
const d = true;
const ages = [45, 65, 48];
const student = {id: 23, class: 7};
console.log(typeof a, typeof b, typeof d,typeof ages, typeof student);

// Output: number string boolean object object
*/



/*
// primitive type
const a = 5;
const b = 'tom not going to his work anymore';
const d = true;

// non-primitive type
const ages = [45, 65, 48];
const student = {id: 23, class: 7};
// console.log(typeof a, typeof b, typeof d,typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);

// Output: 5 5
*/




/*
let x = 5;
let y = x;
console.log(x, y);
y = 7;      // we reassign the value
console.log(x, y);

Output:
5 5
5 7
*/






/*
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
console.log(p, q);

Output:
5 5
5 7
{ job: 'web developer' } { job: 'web developer' }
*/





/*
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q = {job: 'backend end'}
console.log(p, q);
 
Output:
5 5
5 7
{ job: 'web developer' } { job: 'backend end' }
*/





let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q.job = 'front end developer';
console.log(p, q);
/*
Output:
5 5
5 7
{ job: 'front end developer' } { job: 'front end developer' }
*/