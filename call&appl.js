/////////call(),apply(),bind() are the built-in methods of the Function////////
             
       ////// call///////

// function foo(a,b){
//     console.log(this, a,b)
// }
// foo();
// foo.call({a:1},7,8);

//        // another method

// var obj = {name:"Niladri"};
// var greeting = function(a,b,c){
//     return "welcome "+this.name+" to "+a+" "+b+" in "+c;
// };
// console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));



       ////apply
       
// function foo1(a,b){
//     console.log(this, a,b)
// }
// foo1();
// var args=[9,19]
// foo1.apply({a:1},args);

//           //////// another method

//        var obj = {name:"Niladri"};

//        var greeting = function(a,b,c){
//            return "welcome "+this.name+" to "+a+" "+b+" in "+c;
//        };

//  // array of arguments to the actual function
//        var args = ["Newtown","KOLKATA","WB"];  
//        console.log(greeting.apply(obj,args));




 ////////////////// bind//////////////////////////////////////////////////

//  var obj = {name:"Niladri"};

// var greeting = function(a,b,c){
//     return "welcome "+this.name+" to "+a+" "+b+" in "+c;
//       };

//       //creates a bound function that has same body and parameters 

// var bound = greeting.bind(obj); 
// //console.log(bound); ///returns a function
// console.log(bound("Newtown","KOLKATA","WB"));











////////////////////call()////////////////////

// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   var person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//   var x = person.fullName.call(person1, "Oslo", "Norway"); 
//   document.getElementById("demo").innerHTML = x; 



  ////////////Apply()///////////////

//   var person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// var person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// var x = person.fullName.apply(person1); 
// document.getElementById("demo").innerHTML = x; 




