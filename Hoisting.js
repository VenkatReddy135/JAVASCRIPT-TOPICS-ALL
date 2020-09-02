////////1)variables can't be hoisted up

// console.log(x);   ///output: Undefined
// var x=10;    





/////2)function Declarations or named functions can be hosited up////////

// hello();   /////output:  "hi venkat"

// var myName="venkat"
// function hello(){             //named Function or function Declaration
//   setTimeout(function(){
//     console.log("hi "+myName);
//   },1500)
// }





////3)function Expressions or anonymous Functions cannot be hoisted Up



// hello();  //// output: Error hello is not a function..

// var myName="venkat";
// var hello=function(){      //anonymous or function expressions
//     setTimeout(function(){
//         console.log("hi "+myName);
//     },1500)
// };







///sum of squares of first 10 odd numbers


//divided by 2 fizz
//divided by 3 buzz
//divided by 3 & 5 fizbuz
// var arr=[]
// function add(n){
//     for(i=1;i<=n;i++){
//         if(i%3==0&i%5==0){
//           arr.push("fizbuzz")
//         }else if(i%3==0){
//             arr.push("buzz")
//         }else if(i%2==0){
//             arr.push("fizz")
//         }else{
//             arr.push(i)
//         }
//     }
//     return true;
// }
// add(50)
// console.log(arr);


//   var y=arr.join(',');
//   console.log(y)





