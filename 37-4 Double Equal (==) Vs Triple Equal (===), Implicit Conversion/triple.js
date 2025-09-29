/*                       37-4 double equal (==) vs triple equal (===), implicit conversion */

// always use ===
// equal comparison doesn't work for non-primitive type
/*
const first = 2;
const second = 2;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are equal




const first = 2;
const second = 2;
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are equal





const first = 2;
const second = '2';
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal





const first = 2;
const second = '2';
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are equal





const first = 2;
const second = true;
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal





const first = 2;
const second = true;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal






const first = 1;
const second = true;
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal





const first = 1;
const second = true;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are  equal





const first = 1;
const second = false;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal

// type coercion 
// type conversion
// type casting





const first = 0;
const second = false;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are equal

// type coercion 
// type conversion
// type casting





const first = '0';
const second = false;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are equal

// type coercion 
// type conversion
// type casting






const first = 20;
const second = 25;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal

// type coercion 
// type conversion
// type casting






const first = {};
const second = {};
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal

// type coercion 
// type conversion
// type casting






const first = {x: 5};
const second = {x: 5};
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal

// type coercion 
// type conversion
// type casting






const first = [];
const second = [];
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal

// type coercion 
// type conversion
// type casting






const first = [];
const second = [];
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are not equal

// type coercion 
// type conversion
// type casting
*/




const first = [];
const second = first;
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// Output: values are equal

// type coercion 
// type conversion
// type casting
