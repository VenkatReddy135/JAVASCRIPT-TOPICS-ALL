// function myFunction() {
//   var x = document.getElementById("demo").value;
//    var message=document.getElementById("num1");
//     try { 
//       if(x == "")  throw "is empty";
//       if(isNaN(x)) throw "is not a number";
//       x = Number(x);
//       if(x > 10)   throw "is too high";
//       if(x < 5)  throw "is too low";
//     }
//     catch(err) {
//       message.innerHTML = "Input " + err;
//     }
//     finally {
//       console.log("the result is"+" "+x);
//     }
//   }





  ////////////Another Example for try and catch block/////

  function add(x,y){
    if(typeof x=='number'&& typeof y=='number'){
         return x+y;
    }else{
      throw "only numbers are allowed as arguments"
    }
  }

  try{
    console.log(add(12,'hello'));
  }
  catch(error){
        console.log(error);
  }