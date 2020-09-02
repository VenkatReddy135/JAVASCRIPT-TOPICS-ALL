/////////////////////////actual prototypes//////////////////////////////////////////////////////////////////////////////
 //Every object in javascript has an assosiate object we call it as an prototype
 
 
          //////object creation///////

let dog={runs:true};

// creating another object "cat" which has properties of object "dog"
let cat=Object.create(dog);

console.log(cat.runs); // output true

// checks whether object "cat" has all the properties of object "dog"

console.log(Object.getPrototypeOf(cat)==dog)// output is true

// sets new properties for object "cat"

Object.setPrototypeOf(cat, {name:"venkat"}) //setting the assosiate Object here

console.log(cat.name); // output is venkat


///////////////////////////////////////////////////////////////////////////////////////////////

//For normal objects no need of prototype

// var obj={name:"venkat",age:25,location:"hyderabad"};
// obj.nationality="indian";
// console.log(obj)

//    https://www.geeksforgeeks.org/prototype-in-javascript/  prototypes url

//  abstract clases  https://www.tutorialsteacher.com/typescript/abstract-class

//prototype works on function objects...when ever a function is called the prototype
// is generated and it has all the properties of the parent objects...the new 
// properties will be added to the proto of that object.

// function Person(name,age,location){
//     this.name=name;
//     this.age=age;
//     this.location=location; 
// }
// Person.prototype.language="hindhi"
// var emp1=new Person("venkat",25,"hyderabad");
// var emp2=new Person("shiva",35,"mumbai");
// console.log(emp2.language);



//       different exectutions based on time 

// setTimeout(()=>{
//     console.log(9)
// },300)
// setTimeout(()=>{
//     console.log("helloworld")
// },50)
// console.log(11);



///////indexOf() method and its uasge

// var array=["hello","world","venkat"];
// var y=array.indexOf("venkat");
// console.log(y)




  ////////////////////Prototypes Concepts//////////////////////////
//Every object has sub object called prototype

// ////let "obj" be an object..it has "property x" and a "__proto__ object"
// let obj={x:1};
// console.log(obj)

// //let us add a proto(inherited or assosiative) inhereited object to parent object "obj"
//  ///setting an assosiate object 
// ///called obj1 and now obj has all the properties of obj and obj1
// let obj1={y:1}
// Object.setPrototypeOf(obj,obj1);
// console.log(obj);  // see in console proto is added


