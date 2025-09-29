/*                      37-3 Different Truthy and Falsy values in JavaScript */

/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy excepts 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []

Falsy: 
1. false
2. 0
3. '' (empty string)
4. undefined
5. null




const x = false;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is falsy




const x = 4;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is truthy





const x = -4;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is truthy






const x = 0;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is falsy





const x = 'Salman Shah';
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is truthy





const x = 'S';
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is truthy






const x = '';
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// value of x is falsy





const x = ' ';  // Different on this part ' '
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is truthy






const x = '0';  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is truthy





const x = 'false';  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// Output: value of x is truthy





let x;
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

Output:
undefined
value of x is falsy






let x = null;
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}
 
null
value of x is falsy





let x = {};
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

Output:
{}
value of x is truthy





let x = {a: 5, b: 56};
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}
 
Output:
{ a: 5, b: 56 }
value of x is truthy






let x = [];
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

Output:
[]
value of x is truthy





let x = [5, 6];
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}
 
Output:
[ 5, 6 ]
value of x is truthy






let x = [5, 6];
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = '';
if(!y){
    console.log('value is falsy');
}

Output: 
[ 5, 6 ]
value of x is truthy
value is falsy







let x = [5, 6];
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = null;
if(!y){
    console.log('value is falsy');
}

 
Output:
[ 5, 6 ]
value of x is truthy
value is falsy






let x = [5, 6];
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = null;
if(!y){
    console.log('value is falsy');
}

// check true
const z = ' ';
if(!!x){
    console.log('value is truthy');
}

Output:
[ 5, 6 ]
value of x is truthy
value is falsy
value is truthy







let x = [5, 6];
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = null;
if(!y){
    console.log('value is falsy');
}

// check true
const z = 50;
if(!!x){
    console.log('value is truthy');
}

Output:
[ 5, 6 ]
value of x is truthy
value is falsy
value is truthy
*/





let x = [5, 6];
console.log(x);  
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = null;
if(!y){
    console.log('value is falsy');
}

// check true
const z = {class: 9};
if(!!x){
    console.log('value is truthy');
}

/* 
Output:
[ 5, 6 ]
value of x is truthy
value is falsy
value is truthy 
*/




