////////promises => promises are used to handle multiple asnchronous operations

//////when we sent request to server we will get the response
///asynchronously and to handle that asynchronous data we will use callbacks
//promises,async await,observables,axioms.....



// let cleanRoom=new Promise(function(resolve,reject){
//      isclean=false;
//      if(isclean){
//          resolve("cleaned")
//      }else{
//          reject("dirty")

//      }
// })

// cleanRoom.then(function(result){
//        console.log(`the room is ${result}`);
// }).catch(function(result){
//      console.log(`the room is ${result}`);
// })






/////Another Example for promise asynchronous data/////////

let cleanRoom=function(){
    return new Promise(function(resolve,reject){
        resolve('cleaned the room')
    })
}
let washDishes=function(x){
    return new Promise(function(resolve,reject){
        resolve(x+' washed the dishes')
    })
}
let woniceCream=function(x){
    return new Promise(function(resolve,reject){
        resolve(x+' won the icecream')
    })

}

cleanRoom().then(function(Result){
    return washDishes(Result)
}).then(function(Result){
    return woniceCream(Result)
}).then(function(Result){
    console.log('finally '+Result)
})









////////if all are resolved Promise.all() method is used///////////

// let p1=new Promise(function(resolve,reject){ 
//     resolve("it has resolved 1st time");
// })

// let p2=new Promise((resolve,reject)=>{       //arrow function used
//    resolve('it has resolved 2nd time')
//     });
// let p3=new Promise(function(resolve,reject){
//     resolve("it has resolved 3rd time");
// });

// Promise.all([p1,p2,p3]).then(function(results){
//     results.forEach(function(result){
//             console.log(result);
//     })
// })








///////////Promise.allSettled() => method is used when we have both resolve and reject////////////

// let p1=new Promise(function(resolve,reject){ 
//     let z=resolve("it has resolved");
//     setTimeout(z,400)
// });
// let p2=new Promise((resolve,reject)=>{
//     let y=reject('it has been rejected')
//     setTimeout(y,400)
//     });
// let p3=new Promise(function(resolve,reject){
//     let x=resolve("it has resolve")
//     setTimeout(x,5000)
// });


// Promise.allSettled([p1,p2,p3]).then(function(results){
//     results.forEach(function(result){
//         console.log(result);
//     })
// })

