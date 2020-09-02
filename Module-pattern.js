
//// 1)Mainly the usage of immediately invoked function expressions(IIFE)/////

// var counter=(function(){

//     //private stuff
//     let count=0;

//     function print(message){
//         console.log(message+'-----'+count);

//     }
//      //return an object
//     return {

//         get:function(){
//            return count;
//         },
//         set:function(value){
//            count=value;
//         },
//         increment:function(){
//             count+=1;
//       print('After increment: ');
//         },
//         reset:function(){
//         print('Before reset: ');
//         count=0;
//         print('After reset: ');

//         }
//     }


// }())

// counter.increment();
// counter.increment();
// counter.increment();

// counter.set(7);
// console.log(counter.get());
// counter.reset();


///2)Module Pattern in another way

let counter=(function(){
    let count=0;

    function print(message)
    {
        console.log(`${message}=>${count}`);
    }

    function getCount(){
        return count;
    }

    function setCount(value){
        count=value;
    }

    function incrementCount(){
        count+=1;
        print('After increment: ')
    }

    function resetCount(){
        print('Before reset: ');
        count=0;
        print('After reset: ')
    }
   
    //revelas the public functions
    //cleaarer presentations
    //howerver you can accidently overwrite
    //the property values

    return{
        get:getCount,
        set:setCount,
        increment:incrementCount,
        reset:resetCount
    }

}())
console.log(counter.get());
counter.set(7);
console.log(counter.get());
console.log(counter.increment());
console.log(counter.reset())