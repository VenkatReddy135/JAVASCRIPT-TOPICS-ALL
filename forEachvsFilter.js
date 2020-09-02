 var arr=["venkat","ravi","prashanth"];
//   arr.forEach(function(x){
//     console.log(x)

// });

 var z=arr.filter(function(ele){
      if(ele!="ravi"){
        return true;
      }
 })
 console.log(z);
