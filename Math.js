////How to find the largest and smallest number in the array using Math operators


////////////smallest number in the array///////////

// var arr=[1,2,3,4,5,6];
// console.log(Math.min.apply(null,arr));



/////////////Largest number in the array//////

// var arr1=[1,2,3,4,5,6];
// console.log(Math.max.apply(null,arr1));



////////Math.random() gives the random number between 0 & 1

// console.log(Math.random())



//////////Math.round() gives the nearest integer value

// console.log(Math.round(3.4))  //output 3
// console.log(Math.round(3.7))   //output 4




///////Another usage of spread Operators/////////
// var arr=[1,2,3,5,6,29];
// console.log(Math.max(...arr));  /// it gives the max  value as 29

//here in this example array "arr" is converted to comma seperated 
//arguments 1,2,3,4,5,6 



/////////////////Examples/////////////

// function add(...args){
//     console.log(Math.max(args))    ///this gives output NAN
// }
// add(1,2,3,4,5,6,7);




// function add(...args){
//     console.log(Math.max(...args))    ///this gives output 7
// }
// add(1,2,3,4,5,6,7);




// generating a randomnumber between 1 and 5

let upper =5;
let lower=1;
let myRandom=((Math.random() * (upper-lower)+1)+1);

let dice=Math.floor(myRandom);
console.log(dice)


//here math.random() gives a number between 0 & 1;
//math.floor(3.14) gives the result of 3
//math.ceil(3.14) gives the result as 4
