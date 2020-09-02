       //1)Rest Operators

// function add(...x){
//     let sum=0;
//     for(let value of x){
//         sum+=value
//     }
//     return sum;
// }
// console.log(add(1,2));
// console.log(add(1,2,3,4));





          //2)Spread Operators

//it convers the array into an (,) seperated arguments
//     let arr=[1,2,3,4];
//     let arr1=[5,6,7,8];
//     let totalArray=[...arr,...arr1];
//     console.log(totalArray);





////spread Operators///////
// var obj={id:1,name:"venkat",age:30};
// var obj1={
//        ...obj
// }
// console.log(obj1);
// console.log(obj);





////////Another usage of spread Operators/////////
// var arr=[1,2,3,5,6,29];
// console.log(Math.max(...arr));  /// it gives the max  value as 29

//here in this example array "arr" is converted to comma seperated 
//arguments 1,2,3,4,5,6 








//////////////Different ways of finding sum of the elements//////////




//1)BASIC (FORLOOP) METHOD TO FIND SUM OF NUMBERS OF THE ARRAY

// let arr=[1,2,3,4,5,6,7]

//  sum=0;
// for(i=0;i<arr.length;i++){
//    sum=sum+arr[i];        
// }

// console.log(sum);





//2)USING [FOR IN AND FOR OF LOOPS]  TO FIND THYE SUM OF THE NUMBERS

// # using for in loop

// let array=[1,2,3,4,5,2];
//   sum=0;
// for(i in array){
//    sum=sum+array[i];      
// }
// console.log(sum)



//  using #for of loop

// let array=[1,2,3,4,5,6,7,8];
// sum=0;
// for(value of array){
//   sum=sum+value;
// }
// console.log(sum);





//3)USING "REST OPERATORS" TO FIND SUM OF NUMBERS

// function add(...x){
//        sum=0;
//        for(i=0;i<x.length;i++){
//               sum=sum+x[i];     
//        }
//      return sum;
// }
// console.log(add(1,2,3,4))





//4) sum of first 10 even numbers

//   sum=0;
// for(i=1;i<10;i++){
//     if(i%2==0){
//        sum=sum+i
//     }
// }

// console.log(sum);


