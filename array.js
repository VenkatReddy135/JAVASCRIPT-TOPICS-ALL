// let car=["bmw","benz","alto"];
//  let buses=["hello","you","me"];
//  let vechiles=car.concat(buses);
//  vechiles.reverse();
//  console.log(vechiles);
//  console.log(vechiles.join(","));
//  vechiles.pop();
//  console.log(vechiles);
// car[1]="venkat";
// console.log(car);




//array and its properties

// arr=new Array("bmw","volvo","benz","nano","mahendra"); //creating new array
// console.log(arr);
// arr[0]="venkat"; //changing array values
// console.log(arr)
// arr[20]="shiva" ///adding array elements
// console.log(arr.length);
// arr.length=0;  ///deleting all array elements

// console.log(arr);

// console.log(arr.length);


////////Array referce checking///////

var arr=[2,1,'a',4,7];
var arr1=[1,2,4,'a',7];
console.log(arr===arr1);  //false

console.log(arr.sort()===arr1.sort())   //false

//answer =>  false false because Array are reference type. So if you
// compare 2 arrays, it will compare the memory address, 
//not their values.






