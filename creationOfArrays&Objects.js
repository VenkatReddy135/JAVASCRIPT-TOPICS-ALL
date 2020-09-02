
//////////////creation of an array////////////

///1)Method

// var arr=new Array();      
// arr[0]="hello";
// arr[1]="ravi";
// console.log(arr);

///2)Method

// var cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars);
// console.log(cars[0]);

//3)Method

// var things=["pensils","sharpners","eraisers",1,2,3];
// console.log(things);


////////changing the values in the array and adding new values to array/////////////


// var array=["ravi","ramu","hitesh"];
// array[1]="venkatReddy";       ///change the value of array elements
// array[3]="hello";              /// adding new values to the array
// console.log(array);





///////////how to get the values of multidimensional arrays//////

// var arr=[["ravi","ramu","raju"],
// ["venkat","vignesh","venu","vishwas"],
// ["pawan","prashanth","pranay","purushotham",["mahesh","madhu","manjunath"]]];

//console.log(arr[0][1]);   //// "0"th index 1st position value  is "ramu"
//console.log(arr[1][3]);   ////  "1st" index 4th position value is "vishwas"
//console.log(arr[2][2]);   ///  "2nd"  index 3rd position value  is "pranay"
///console.log(arr[2][4][0]); ////  "2nd" index 5th position array 1st value is "mahesh"

// arr[2][4][0]="mahesh babu";  /// changing the value "mahesh" to "mahesh babu"

// console.log(arr[2][4]);  // checking the updated value






////////////looping over single array elements///////////

// var cars=[11,2,13,24,5,46];

// for(i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }



/////////////looping over multi dimensionl arrays/////////

// var grades=[[12,21,32,56,76],
// [23,21,27,18,6,9,3,2]
// ,[34,45,26,76,109,11,17,29]];

// for(i=0;i<grades.length;i++){
//     for(k=0;k<grades[i].length;k++){
//         console.log(grades[i][k])
//     }
//     console.log("=======");   /// To differntiate between arrays one after the other
// }


/////looping multi dimensional array using foreach() method///////

// var grades=[[12,21,32,56,76],
// [23,21,27,18,6,9,3,2]
// ,[34,45,26,76,109,11,17,29]];


// grades.forEach(function(ele){
//      ele.forEach(function(result){
//           console.log(result);
//      });
//      console.log("=====");
// })







///////////////////creation of object//////////////

//expect primitives everything is an object in javascript
//because primitivies have no properties and methods

//1)First Method

// var obj=new Object();
// obj.fname="venkat";
// obj.lname="ravi";
// console.log(obj);

// var obj1=Object.create(obj);  ///all the properties of obj are inherited to obj1
// console.log(obj1.lname);


//2)Second Method

// var person={firstName:"venkat",lastName:"reddy",fullName:"venkatReddy"}
// console.log(person);  // logs the total object
// console.log(person.fullName)  //logs the particular property value "venkatReddy"

// person.age=20;              // adding a property called "age"
// console.log(person);
// delete person.firstName;    // deleting a property called "firstName"
// console.log(person); 
// person.fullName="VenkateshwarReddyBogala"  ///updating the property
// console.log(person);








///////iterating over array//////

var cars=["volvo","bmw","benz","alto"];
 var x=cars.join('-');
console.log(x);
var y=cars.toString();
console.log(y);
console.log(cars);
 

// for(var index in cars){         //index represents each index
//    console.log(cars[index])
// }

// for(car of cars ){            // car represents every car
//     console.log(car)
// }








/////iterating over object///////

// var obj={name:"venkat",age:25,gender:"male"}

// console.log(obj.name);       ////one way output is "venkat"
// console.log(obj['gender']);  // other way  output is "male"


  var obj={name:"venkat",age:25,gender:"male"}

// console.log(Object.keys(obj));   //output => ["name", "age", "gender"]
// console.log(Object.values(obj));  //output =>  ["venkat", 25, "male"]
// console.log(Object.entries(obj))  // both key and value pairs



/////for keys in the object////

// for(key in obj){
//     console.log(key);
// }

///for values in the object///

// for(value in obj){
//     console.log(obj[value])
// }








//////checking polindrome for string////////

// var str="venkat";
// function palindrome(){
//     var y=str.split('').join('');
//     var x=str.split('').reverse().join('')
//     if(x==y){
//         console.log("yes it is a polindrome");
//     } else {
//         console.log("no its not a polyndrome")
//     }
// }
// palindrome();

/////////checking polindrome for number//////

// var str1=121;
// var str2=str1.toString();
// function palindrom(){
//     var m=str2.split('').join('');
//     var n=str2.split('').reverse().join('')
//     if(m==n){
//         console.log("yes it is a polindrome");
//     } else {
//         console.log("no its not a polyndrome")
//     }
// }
// palindrom();



////dynamically checking whether it is a palyndrome or not///

// function palindrome(){
//     var str=prompt("Enter some String");
//     var y=str.split('').join('');
//     var x=str.split('').reverse().join('')
//     if(x==y){
//         console.log("yes it is a polindrome");
//     } else {
//         console.log("no its not a polyndrome")
//     }
// }
// palindrome();





// var str1=121
// var str2=str1.toString();
// console.log( typeof str2); ///output is string








