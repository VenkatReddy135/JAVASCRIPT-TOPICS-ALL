
////////////////////Array of cars////////////////

var cars=["benz","bmw","scoda","audi","swift","scorpio"];



//// 1)ForEach method  ///////////

//// Array.forEach() method =>loops each and every value same as "forloop"..

// cars.forEach(function(item,index){
    ///object literal syntax
//   console.log(`my car is ${item} and the number is ${index+1}`);   
    ///normal concatination
//  console.log( "hello my car is "+item+" "+ "and the number is "+(index+1)); 
// })



///using forEach() method and pushing elements into another array based
//on the condition

// var x=[];
// cars.forEach(function(ele){
//      if(ele.length>4){
//        x.push(ele);
//      }
// })
// console.log(x);







/////2)Map method//////////////////////////////////////////

/////Array.map() method => it gives new copy of the array
///(below example updatedCars is the new copy of array)
 ////and if we wanted to add something to the array we can 
 /////it will give the new array with updated values

// var updatedCars=cars.map(function(item){
//     return item+"car";
// })
// console.log(updatedCars);







/////////3)Filter method////////////////////////////////////////

//Array.filter() method => filters each and every item in the array 
// and returns only what we want to return(in the below example 
//it will return all the array items except "audi")

// const filterdList=cars.filter(function(item){
//      return item!="audi" 

// //     //or another Method

// //     if(item!="audi"){
// //       return true;
// //     }

// })
// console.log(filterdList);









////////////4)sorting of array////////////////////

//////Array.sort() method => it sorts the array and gives us the array 
/////values in ascending or decending order based on the condition used..

//    var ages=[11,9,81,33,23];

// const sortedArray=ages.sort(function(a,b){
//     if(a>b){
//         return 1;           ///(here 1 means true)
//     }else{
//         return -1;        ///(here -1 means false)
//     }
// })
// console.log(sortedArray);      ///output [9,11,23,33,81] since condition(a>b)  and  if it is (a<b) output will be [81,33,23,11,9]








/////////////5) reduce //////////////////////

///// Array.reduce() method =>reduce method will give the 
// sum of the values in the array

  //var ages=[11,9,81,33,23];

// const sum=ages.reduce(function(a,b){
//     return a+b; 
// },0);
// console.log(sum);      // output is 157







////// 6)find() Method //////

// find() method do not return a new array. It just returns 
///the first element which met the condition in the callback function
// but if no element matches the condition, it returns undefined.

// var arr=["hello","basketBall","footBall","coco"];
//   var x=arr.find(function(ele){
//       return ele.includes('Ball');
//   })
//   console.log(x);    //output is  'basketBall'







  //////7)findIndex() Method/////////

  // This method is the same as find() method, the only difference is,
  // it gives the index number of the first element found who meets the 
  // condition but if not found and match then it returns -1

  // var arr=["hello","basketBall","footBall","coco"];

  // var arr1=arr.findIndex(function(ele){
  //     return ele.includes('coco')
  // })
  // console.log(arr1)    ////output is 3








  ////8)some() method ///////

//some() method returns true if atleast one element in the array satisfies
//the given condition..if not a single element satisfies the given condition
//then it returns false;

  // var arr=[2,3,4,5,6];
  //  var arr1=arr.some(function(ele){
  //   if(ele%2==0){
  //     return true
  //   }else{
  //     return false
  //   }
  // })
  // console.log(arr1);  //output is True 
  

  




  ////9)Every() method////////

  //every() Method returns true only if all the elements in the array should
  //satisfies the given condition...if atleast one element doesn't satisfy the 
  //condition then it returns false
  

  // var arr=[2,3,4,5,6];
  //  var arr1=arr.every(function(ele){
  //   if(ele%2==0){
  //     return true
  //   }else{
  //     return false
  //   }
  // })
  // console.log(arr1)   // output is false




  







