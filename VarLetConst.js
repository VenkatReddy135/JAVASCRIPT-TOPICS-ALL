// const x=10;
// if(true) {
//    const  y=20;
//      console.log(y);             /////output 20
//     if (true){
//        const y=30;
//         console.log(y);            /////////output 30
//     }
// }
// console.log("hello boss "+x);       //////output hello boss 10
// console.log(y);                    ///////output error "y is not defined"


// var x=10;
//   var x=20;
// console.log(x)// output 20;  re-assign possible


// let x=10;
// let x=10;
// console.log(x);// error cant re-assign if we use let


// let x=10;
// x=20;
// console.log(x); // output 20 ;  you can update if you use let 


// const x=10;
// x=30;
// console.log(x);// error  //if we use use const we cant upate or re-asign


// let x=10;
// if(true) {
//     const y=20;
// }
// // console.log(y);//not posiible because const is a blocked scope



// var cats=3;
// function myfunc(){
//    let cats=4;
//     if(cats<5){
//         console.log(`i have ${cats} cats`); /// i have 4 cats
//     }else{
//         console.log(cats);
//     }
//   function bar(){
//     let cats=29;
//     console.log(cats);   // 29
//     }
//     bar();
//     console.log(cats);    //4
// }
// myfunc();
// console.log(cats);     //3





// for(var i=0;i<10;i++){   ///if it is let the output will be different
//      console.log(i);
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }


// var x={id:1,"name":"venkat"}
// console.log(x);

// console.log(a)  // a is undefined because variables cant be hosted up
// var a=30;


// var b=20;
// function add(){
//     console.log(a);
//      var a=10;
//      console.log(a);
//      console.log(b);
// }
// add();


/////////////////////////////////////////////


////////////////////////////////////////////////////

////////////////////////////////////////////////

//////////////////////////////////////////////////


/////////////////////////usage of var//////////////

// function add(){
//   var x=30;
// }
// add();
//   console.log(x)  ///x is  not defined error  because var is function scope variable


  // {
  //   var x=30;
  // }
  // console.log(x)   /// yes output is 30

  // var x=10;
  // {
  //   var x=80;
  // }
  // console.log(x) ////////out put is 80


  ///////////usage of let////////////////////

// function add(){
//   let x=20;
// }
// add()
// console.log(x)         //error x is not defined


  // {
  //   let x=20
  // }
  // console.log(x);   /// error x is not defined
  

// let x=10;
// {
//     x=20;
// }

// console.log(x)  //// out put is 20


// let x=10;
// {
//    let x=20;
// }

// console.log(x)  //// out put is 10



//////////usage of const//////////////


// function add(){
// const x=20;
// }
// add()
// console.log(x)   /// output is x is not defined


// {
//   const x=20;
// }
// console.log(x)     // x is not defined error



// const x=10;
// {
//  const x=20;
// }
// console.log(x);   ////out put is 10;


// const x=10;
// {
//     x=20;
// }
// console.log(x);   // uncought type error assignment is not possible


// const x=10;
// {
//     y=20;
// }
// console.log(x);   ///out put is 10;



/////example of var and let////

// var fruits="apple";
// var flowers="lotus";

// function add(){
//   var fruits="banana";
//   var flowers="roses"
  
// }
// add();

// console.log(fruits);  //apple
// console.log(flowers); //lotus







// var fruits="apple";
// var flowers="lotus";

// function add(){
//    fruits="banana";
//    flowers="roses"
  
// }
// add();

// console.log(fruits);  //banana
// console.log(flowers); //roses

//////////using let keyword 
let fruits="apple";
let flowers="lotus";

function add(){
   fruits="banana";
   flowers="roses"
  
}
add();

console.log(fruits);  //apple
console.log(flowers); //lotus