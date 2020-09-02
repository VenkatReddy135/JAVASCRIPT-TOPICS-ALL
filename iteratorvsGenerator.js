
  ////////////iterators///////////////

// let arr=[1,2,3,4];

// let iterator=arr[Symbol.iterator]();

// console.log(iterator.next())  //output {value: 1, done: false}
// console.log(iterator.next())  //output {value: 2, done: false}
// console.log(iterator.next())  //output {value: 3, done: false}
// console.log(iterator.next())   //output {value: 4, done: false}
// console.log(iterator.next())   //output {value: undefined, done: true}


//////////////generators/////////////////

 //// can pause or stop a function execution when ever required

 function *generator(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
 };

 let iterator=generator()
 console.log(iterator.next())    //output {value: 1, done: false}
 console.log(iterator.next())    //output {value: 2, done: false}
 console.log(iterator.next())    //output {value: 3, done: false}
 console.log(iterator.next())    //output {value: 4, done: false}
 console.log(iterator.next())    //output {value: undefined, done: true}