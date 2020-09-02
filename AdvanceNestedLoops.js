let companies=[{name:"oracle",category:"retail",start:1995,end:2014},
{name:"infosis",category:"finance",start:1996,end:2016},
{name:"tech",category:"software",start:1986,end:2017},
];

////////////////iterating over array of objects///////////////

///For loop
// var l=[];
//  for(var i=0;i<companies.length;i++){
//       var x=companies[i].name;
//        l.push(x);
//  }
//  console.log(l);

 ///forEach() loop
// var y=[]
// companies.forEach(function(company){
//      var x=company.category;
//      y.push(x);

//  })
//  console.log(y)

 ///for-in loop
//  for(index in companies){
//      console.log(index);
//  }

 ///for-of loop
//  for(company of companies){
//      console.log(company);
//  }


 ///map() loop
//   companies.map(function(company){
//     console.log(`The experiance of the company  ${company.name} = ${company.end-company.start}`);
//  });
 


 ///filter() loop

//  var x=companies.filter(function(company){
//      if(company.name=="infosis"){
//         return true;
//      }
//  })
//  console.log(x);




//////////iterating over array of items (they may be string or numbers)////////
 
const ages=["one","two","three","four","five"];

console.log(ages[4]); ///output is five

///for-loop
for(i=0;i<ages.length;i++){
    console.log(ages[i]);
}

///forEach() loop
ages.forEach(function(age){
  console.log(age);
});


///filter() loop
 var filteredage=ages.filter(function(age){
    return age.length>3
 });
 console.log(filteredage);


  ///map() loop 
var mapedage=ages.map(function(age,index){
    return `${age}  ${index+1}`
});
console.log(mapedage);


///find loop

 var findage=ages.find(function(age){
  return age.includes("ive")
});
console.log(findage);


 ///for-in loop
 for(index in ages){
     console.log(index);
 }

 ///for-of loop
 for(age of ages){
     console.log(age);
 }


 ///reduce() loop

//one way
 var array1=[1,2,3,4,5,6];
 var array2=array1.reduce(function(result,sum){
       return result+sum
 },0);
 console.log(array2);
 
 //another way
var arr=[[0,1],[2,3],[4,5],[6,7],[8,9]]
 var arr3=arr.reduce(function(result,sum){
  return result.concat(sum)
},[]);
console.log(arr3);



///ES6 features (clases)

// class Employee {
//     constructor(Fname,Lname,Start){
//         this.fname=Fname;
//         this.lname=Lname;
//         this.start=Start
//     }
//     getFullName(){
//          var x=10;
//          var y=20;
//         return x+y;
//     }
//     getMe(){

//     return this.getFullName();
//     }

// }
// var emp1=new Employee("ravi","krishna",{x:10,y:20});
// console.log(emp1.start);
// console.log(emp1.getFullName());



// class Students{
//     constructor(fname,lname,age){
//       this.fname=fname;
//       this.lname=lname;
//       this.age=age

//     }

//     getFullName(){
//         return `${this.fname}${this.lname}`
//     }

//     getDetails(){
//         return `he is ${this.getFullName()} and is of age ${this.age}`
//     }

// }

// let std1=new Students('venkat',"reddy",25);
// console.log(std1);
// console.log(std1.getDetails());
 
 




