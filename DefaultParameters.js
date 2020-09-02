
////default parameters means declaring the values along with the parameters
//the first preference will be given to the values which are being given when we
//are calling function

// function add(x=10,y=20){
//     return x+y
// }
// console.log(add()); ////here passing values have first priority
  //output is 30
  

  ////////we can call another function as default parameter///////

// function add(x="hello",y=add1()){
//   return `${x} ${y}`; 
// }
// console.log(add());  //output => hello world



// function add1(){
//   return 'world';
// }

