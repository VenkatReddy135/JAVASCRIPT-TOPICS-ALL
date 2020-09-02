///////////////closure defination

///////Closure means that an inner function always has access to the
 ///variables and parameters of its outer function, even after the outer
 // function has returned....Inner function can access variables and
 // parameters of an outer function (however, cannot access arguments
 // object of outer function)

// var add=(function(){
//       var x=10;
//       var y=20;
//   return function mul(){
//           var z=x+y;
//        return z;
//        }
      
// }
// ());
//   console.log(add());



// IIFE  immediately invoking function expression

// var m=(function(x,y){
//       return x+y  ;
// }(7,3));
// console.log(m)




