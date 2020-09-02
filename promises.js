///////////Promises in javascript/////////////////////


//////when we sent request to server we will get the response
///asynchronously and to handle that asynchronous data we will use callbacks
//promises,async await,observables,axioms.....



///   Promise=> it's an opertaion that is going to be finished in future

////Promises are objects that promise they will have value in the near
 //future - either a success or failure. Promises have their own methods
 // which are then and catch. .then() is called when success comes, 
 //else the catch() method calls.  
 //Promises are created using the promise constructor. 



// let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    //cleaning the room
  
  //   let isClean = true;
  
  //   if (isClean) {
  //     resolve('Clean');
      

  //   } else {
  //     reject('not Clean');
  //   }
  
  // });
  
  // promiseToCleanTheRoom.then(function(fromResolve) {
  //   console.log('the room is ' + fromResolve);
  // }).catch(function(fromReject){
  //     console.log('the room is ' + fromReject);
  // })
  


///////////////Real Example////////////////////////////

// let cleanRoom = function() {
//     return new Promise(function(resolve, reject) {
//       resolve('Cleaned The Room');
//     });
//   };
  
//   let removeGarbage = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve(message + ' remove Garbage');
//     });
//   };
  
//   let winIcecream = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve( message + ' won Icecream');
//     });
//   };
  

//   cleanRoom().then(function(result){
//       return removeGarbage(result);
//   }).then(function(result){
//       return winIcecream(result);
//   }).then(function(result){
//       console.log('finished ' + result);
//   })






///////////another example///////////////////////


// function myAsync(name){
//   return new Promise(function(resolve, reject){
//        if(name == "Anchal"){
//             resolve("Here is Anchal")
//       }
//       else {
//            reject("Oops! This is not Anchal");
//      }

//   })
// }

// myAsync("Anchala")
// .then(function(val){
//    // Logic after success
//    console.log(val)     // output -  ‘Here is Anchal’
// })
// .catch(function(val){
//  //Logic after failure
//   console.log(val)     // output - ‘Oops! This is not Anchal’
// })




//////example of promises using if else conditions

//  function add(name){
//    return new Promise(function(resolve,reject){
//      if(name==""){
//        reject('hey it should not be empty');
//      }else if(name=="venkatReddy"){
//         resolve('hey venkat welcome!!!');
//      }
//      else{
//        reject('hey you are an unknown person!!')
//      }
//    })
//  }
// add("venkatReddy").then(function(result){
//   console.log(result);
// }).catch(function(result){
//   console.log(result);
// });




