var arr=["venkat","raju","ravi","venkat","raju"]

var set=new Set(arr);
console.log(set);  // output is {"venkat", "raju", "ravi"}

var array=Array.from(set);
console.log(array);  //output is ["venkat", "raju", "ravi"]


//////here we can apply array methods for array at the top//////