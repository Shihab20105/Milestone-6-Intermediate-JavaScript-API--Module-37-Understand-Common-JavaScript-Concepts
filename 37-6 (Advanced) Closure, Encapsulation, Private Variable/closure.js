/*                      37-6 (advanced) Closure, encapsulation, private variable */

/*
function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer);

// Output: [Function (anonymous)]






function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());

// Output: 1
*/






function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

/*
Output:
1
2
3
4
*/




//_________________________________________________________________________________________//
    

                            //====== Devtool =======//

/*
  function stopWatch(){
     let counter = 0;
     return function () {
         counter++;
         return counter;
     }
    
  }
< undefined
> const watch1 = stopWatch()
< undefined
> watch1
< ƒ () {
        counter++;
        return counter;
    }
> watch1()
< 1
> watch1()
< 2
> watch1()
< 3
> watch1()
< 4
> watch1()
< 5
> const watch2 = stopWatch()
< undefined
> watch2()
< 1
> watch2()
< 2
> watch1()
< 6
> watch1()
< 7
> watch2()
< 3
> watch2()
< 4
> const watch3 = stopWatch()
< undefined
> watch3()
< 1
> watch3()
< 2
> watch2()
< 5
> watch1()
< 8
> watch3()
< 3
*/