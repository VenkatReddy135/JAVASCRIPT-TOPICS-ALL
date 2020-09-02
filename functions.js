
/////this is called functions inside functions//
//////closure property //////

// var cats=5;
// function Cats(){
//     var cats=2;
//     if(cats<4){
//         console.log("i have many cats");
//     }else{
//         console.log("i have some cats");
//     }

// }
// Cats();
// console.log(cats)

// how to calculate the wages of the employee

// function Employee(salary,rate,time){
//     return salary+(rate*time)

// }
// console.log(Employee(250,10,10));










//    1)Named functions or function Declarations

////Named functions has a name and can be hoisted up...

// function add(){
//     return "hello world! Welcome";
// }
// document.write(add());  






   // 2)Anonymous functions or function declarations.

   //Anonymous functions doesnt have a name and can't be hosited up..
   //they will be declared to some variable

//    var add1=function(x,y){
//        return x+y;
//    }
//    console.log(add1(2,3))






   ///3)constructor functions

   //using "new and  Function" keywords we will be cteating the functions

//  var add2=new Function("a","b","return a*b");
//   console.log(add2(2,3))






   //// 4)IIFE functions or self Invoking Functions

   ///IIFE functions are self invoking functions which doesnt have a name and
   //they are not declared to any variable..

//    (function add3(m,n){
//      console.log(m+n);
//    }(12,3))


// var z=(function(){
//     return "hello world"
// }());
// console.log(z);
