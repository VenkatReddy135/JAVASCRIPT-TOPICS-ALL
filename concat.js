// //concat method is to combine two arrays into one single array

// var x=["hello"];

// var z=["ravi","raju",3,2,1];

// var m=z.concat(x);
// console.log(m);

let arr=[[{value:10},{value:20},{value:30}]];

for(i=0;i<arr.length;i++){
    var sum=0
    for(j=0;j<arr[i].length;j++){
      sum+=arr[i][j].value;
    }
    console.log(sum);
}