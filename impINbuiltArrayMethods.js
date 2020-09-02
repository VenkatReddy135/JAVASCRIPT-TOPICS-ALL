const numbers=["one","two","three","four","five"];
//               shift=> deletes first element in the array
// numbers.shift();
// console.log(numbers);

//                unshift=> adds elements to the start of the array
// numbers.unshift("venkat");
// console.log(numbers);

//                pop=> deletes the last element in the array
// numbers.pop();
// console.log(numbers);

//                 push=> adds elements the last of the array
// numbers.push("venkat");
// console.log(numbers);

//                  splice the index starts from the 
//                   first parameter and second parameter represents delete count

// numbers.splice(3,2) //// from index 3 delete 2 
// console.log(numbers);

// numbers.splice(3); /// start deleting from index 3 position to rest of all
// console.log(numbers);

// numbers.splice(-2); /// in negative last index is -1 and its before index is -2 so,four and five gets deleted

// console.log(numbers);

//               slice=> counts starts from zero and prints to 
                 //upto second parameters index-1 values


// var y=numbers.slice(0,3);
// console.log(y);





// var x=[{"id":1,"name":"venkat","location":"hyderabad"},
// {"id":2,"name":"ramesh","location":"mumbai"},
// {"id":3,"name":"ravi","location":"kerala"}];
// x.map(function(ele){
//      console.log(ele.location);
// })



////////using for loop to and using array methods/////////
 //// instead of using spice or slice methods we can use this

// let arr=[1,2,3,4,5,6,7,8,9];

// for(i=0;i<6;i++){
//     arr.shift();   ///six times the loop gets executed based on the condition
    
// }
// console.log(arr);  //output  [7, 8, 9]