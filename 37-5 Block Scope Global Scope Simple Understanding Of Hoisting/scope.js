/*                      37-5 Block scope global scope simple understanding of Hoisting */

/*
function add(a, b){
   const total = a + b;
   console.log(a, b);
   return total; 
}
console.log(a, b);
add(5, 7);

Output:
console.log(a, b);
            ^

ReferenceError: a is not defined
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\scope.js:9:13)







function add(a, b){
   const total = a + b;
   console.log(a, b);
   return total; 
}
// console.log(a, b);
add(5, 7);

// Output: 5 7






function add(a, b){
   const total = a + b;
   console.log(a, b);
   return total; 
}
// console.log(a, b);
console.log(total);
add(5, 7);

Output:
console.log(total);
            ^

ReferenceError: total is not defined
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\scope.js:46:13)








function add(a, b){
   const total = a + b;
   console.log(a, b);
   if(b > 5){
        const sum = 25 + a + b;
   }
   console.log(sum);
   return total; 
}
// console.log(a, b);
// console.log(total);
add(5, 7);

Output:
console.log(sum);
               ^

ReferenceError: sum is not defined
    at add (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\scope.js:69:16)
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-37 Understand Common JavaScript Concepts\37-5 Block Scope Global Scope Simple Understanding Of Hoisting\scope.js:74:1)









function add(a, b){
   const total = a + b;
   console.log(a, b);
   if(b > 5){
        const sum = 25 + a + b;
   }
   else{
      const sum = 5 + a + b;
      var current = sum;
   }
   // console.log(sum);
   console.log(current);
   return total; 
}
// console.log(a, b);
// console.log(total);
add(5, 7);

Output:
5 7
undefined







function add(a, b){
   const total = a + b;
   // console.log(a, b);
   if(b > 5){
        const sum = 25 + a + b;
   }
   else{
      const sum = 5 + a + b;
      var current = sum;
   }
   // console.log(sum);
   console.log(current);
   return total; 
}
// console.log(a, b);
// console.log(total);
add(5, 3);

// Output: 13
*/






function add(a, b){
   const total = a + b;
   if(b > 5){
        const sum = 25 + a + b;
   }
   else{
      const sum = 5 + a + b;
      var current = sum;
   }
   console.log(current);
   return total; 
}
// console.log(a, b);
// console.log(total);
add(5, 3);
