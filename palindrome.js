
//Array.split() method splits the string into an array

var str="hello";
var ar=str.split('');
console.log(ar);  // output => ["h","e","l","l","o"]

///Array.join() method joins the array elements into a string

var arr=["ravi","raju","venkat"];
var x=arr.join('');
console.log(x);   /// output => ravirajuvenkat


/// Array.reverse()  method reverses the array or string

 var array=["hello","beem","raju"];
 var m=array.reverse();
 console.log(m);    /// output =>  ["raju","bheem","hello"]




///we  can push anything into an array using push method
var arr2=["ravi","raju","hitesh"];
arr2.push(1,2,3,"may",{x:10,y:20});
console.log(arr2);





//////////checking whether given string is palindrome or not///////////////

// var x="jagaj";
// function polindrome(){
//   let start=x.split('').join('');
//   let end=x.split('').reverse().join('');
//   if(start==end){
//     console.log("yes, it is a palindrome");
//   }else{
//     console.log("no it is not a palindrome");
//   }
// }
// polindrome();




// ////checking whether given number is palindrome or not/////////

// let x=121;
// let y=x.toString();
// function palindrome(str1){  
//   let start=str1.split('').join('');
// let end=start.split('').reverse().join('');
//   if(start==end){
//       console.log("yes,it is a palindrome")
//       }else{
//           console.log("no it is not")
//       }
//   }
//   palindrome(y);
// palindrome('ravi');
// palindrome('madam');
// palindrome("redder");
// palindrome("kayak");
// palindrome("hello");



////// checking palindrome without using inbuilt methods//////////////////

var x="venkat";
// console.log(x[2]) 
var x1=[];
for(i=0;i<x.length;i++){
  //console.log(x[i]);
  x1.push(x[i]);
}
var x2=[];
for(i=x.length-1;i>=0;i--){
  //console.log(x[i])
  x2.push(x[i]);
}
console.log(x1)
console.log(x2)

if(x1.join('')==x2.join('')){
  console.log("yes, it is a polindrome")
}else{
  console.log("no it is not a polyndrome");
}


