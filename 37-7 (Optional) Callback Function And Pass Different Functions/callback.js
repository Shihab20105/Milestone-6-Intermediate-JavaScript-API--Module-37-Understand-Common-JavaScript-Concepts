/*                      37-7 (optional) Callback function and pass different functions */

/*
function greeting(greetingHandler){
    console.log(greetingHandler);
}

greeting('Halim Bhai');

// Output: Halim Bhai




function greeting(greetingHandler){
    console.log(greetingHandler);
}

const name = 'Halim Bhai';
greeting(name);

// Output: Halim Bhai






function greeting(greetingHandler){
    console.log(greetingHandler);
}

// const name = 'Halim Bhai';
const number = 45;
greeting(number);

// Output: 45






function greeting(greetingHandler){
    console.log(greetingHandler);
}

// const name = 'Halim Bhai';
const numbers = [45, 54, 78];
greeting(numbers);

// Output: [ 45, 54, 78 ]







function greeting(greetingHandler){
    console.log(greetingHandler);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
greeting(laptop);

// Output: { price: 45000, brand: 'lenovo', memory: '8gb' }







function greeting(greetingHandler){
    console.log(greetingHandler);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(){
    console.log('Good morning');
}

greeting(greetingHandler);

// Output: [Function: greetingHandler]







function greeting(greetingHandler){
    console.log(greetingHandler());
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(){
    console.log('Good morning');
}

greeting(greetingHandler);

Output:
Good morning
undefined







function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good morning', name);
}

greeting(greetingHandler, 'Tom Hanks');

// Output: Good morning Tom Hanks







function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good morning', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');

Output:
Good morning Tom Hanks
Good morning Tom Brady






function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good morning', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');

Output:
Good morning Tom Hanks
Good morning Tom Brady
Good morning Tom Cruise







function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good morning', name);
}

function greetEvening(name){
    console.log('Good evening', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Salman Shah');

Output:
Good morning Tom Hanks
Good morning Tom Brady
Good morning Tom Cruise
Good evening Salman Shah








function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good morning', name);
}

function greetEvening(name){
    console.log('Good evening', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Salman Shah');
greeting(greetEvening, 'Raz Razzak');

Output:
Good morning Tom Hanks
Good morning Tom Brady
Good morning Tom Cruise
Good evening Salman Shah
Good evening Raz Razzak
*/







function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim Bhai';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good morning', name);
}

function greetEvening(name){
    console.log('Good evening', name);
}

function greetNight(name){
    console.log('Good night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Salman Shah');
greeting(greetEvening, 'Raz Razzak');
greeting(greetNight, 'Manna');

/*
Output:
Good morning Tom Hanks
Good morning Tom Brady
Good morning Tom Cruise
Good evening Salman Shah
Good evening Raz Razzak
Good night Manna
*/

 function submitHandler(){
    console.log('Submit button clicked');
 }
document.getElementById('btn-submit').addEventListener('click', submitHandler);
