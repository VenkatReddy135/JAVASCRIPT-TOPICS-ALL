
//// when you know the array values how to sum them???

///1)Method
// var arr=[1,2,3,24,7];
//  var total=0;
// for(i=0;i<arr.length;i++){
//     total+=arr[i]
// }
// console.log(total);


////2)Method
// var arr=[1,2,3,24,7];

// var total=0;
// for(index in arr){
//     total+=arr[index]

// }
// console.log(total)

//3)Method
// var arr=[1,2,3,24,7,11];
// total=0;
// for(ele of arr){
//   total+=ele
// }
// console.log(total);









///when we dynamically want to give the array elements and to find the sum

// var total=0;
// function add(...x){

    //1)Method
//    for(value in x){
//        total+=x[value]
//    }

  //2)Method
    // for (value of x){
    //     total+=value;
    // }

    //3)Method
    // for(i=0;i<x.length;i++){
    //   total+=x[i];
    // }
   
// }
// add(1,2,3,4,5,6,7)
// console.log(total);








//////////to find the sum of n numbers///////

// total=0;
// for(i=1;i<6;i++){
//     total+=i

// }
// console.log(total);



//to find sum of even numbers less than 10;

// var total=0;
// for(i=1;i<10;i++){
//     if(i%2==0){
//         total+=i
//     }
// }
// console.log(total);






//////////By using "arguments" also we can the sum/////



// function add(){
//     total=0;
//     for(i=0;i<arguments.length;i++){
//         total+=arguments[i];

//     }
//     console.log(total)   //output 60;
// }
// add(10,20,30);