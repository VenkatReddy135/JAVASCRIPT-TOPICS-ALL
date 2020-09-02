/* let vechiles=["benz","alto","nano"];
console.log(vechiles.indexOf("benz"));*/




/////////Array of cars////////////////

var cars=["benz","bmw","scoda","audi","swift","scorpio"];



//////1)ForEach method///////////

/// Array.forEach() method =>loops each and every value same as "forloop"..

// cars.forEach(function(item,index){
//     console.log(`my car is ${item} and the number is ${index+1}`);
// })








/////2)Map method//////////////////////////////////////////

///////Array.map() method => it gives new copy of the array(below example updatedCars is the new copy of array)
 //////and if we wanted to add something to the array we can 
 ///////it will give the new array with updated values

// var updatedCars=cars.map(function(item){
//     return item+"car"
// })
// console.log(updatedCars)







/////////3)Filter method////////////////////////////////////////

////Array.filter() method => filters each and every item in the array and returns 
////only what we want t return(in the below example it will return all the array items except "audi")

// const filterdList=cars.filter(function(item){
//     return item!="audi"
// })
// console.log(filterdList);

// //Another Example
// var myList=[{title:"notdone",id:1,name:"venkat"},
// {title:"notdone",id:2,name:"shiva"},
// {title:"isdone",id:3,name:"ravi"},
// {title:"isdone",id:4,name:"vasanth"},
// {title:"notdone",id:5,name:"divya"}];

// var filteredList=myList.filter((item)=> item.title.includes('isdone'));
// console.log(filteredList);





//////Array of ages/////////

var ages=[11,9,81,33,23];






////////////4)sorting of array////////////////////

//    var ages=[11,9,81,33,23];

//////Array.sort() method => it sorts the array and gives us the array 
/////values in ascending or decending order based on the condition used..

// const sortedArray=ages.sort(function(a,b){
//     if(a>b){
//         return 1;           ///(here 1 means true)
//     }else{
//         return -1;        ///(here -1 means false)
//     }
// })
// console.log(sortedArray);      ///output [9,11,23,33,81] since condition(a>b)  and  if it is (a<b) output will be [81,33,23,11,9]








/////////////5) reduce //////////////////////

//    var ages=[11,9,81,33,23];

///// reduce method =>reduce method will give the sum of the values in the array

// const sum=ages.reduce(function(a,b){
//     return a+b; 
// },0);
// console.log(sum);      // output is 157
