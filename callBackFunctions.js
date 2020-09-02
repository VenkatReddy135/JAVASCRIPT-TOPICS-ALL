
//////call back functions definations//////////////////////
//////A callback function is a function passed into another function
 //as an argument, which is then invoked inside the outer function
//to complete some kind of routine or action.


// function add(x, y) {
//     return x + y
//   }
  
//   function addFive (x, addReference) {
//     return addReference(x, 5)     // 15 
//   }
  
//   console.log(addFive(10, add));     // output 15





/////////call backs real defination//////////////
//////when we sent request to server we will get the response
///asynchronously and to handle that asynchronous data we will use callbacks
//promises,async await,observables,axioms.....

// var obj=[{name:"venkat",ocuupation:"software"},
// {name:"pawan",ocuupation:"actor"},{name:"kalyan",ocuupation:"politician"}];

// function getPost(){
//   setTimeout(()=>{
//       var output='';
//       obj.forEach((ele)=>{
//         return output+=`<li>${ele.name}</li>`
//       })
//       document.getElementById("dhoni").innerHTML=output;
//   },1000)
// };

// function nextPost(post,callback){
// obj.push(post);
// callback()

// }

// nextPost({name:"allu arjun",occupation:"dancer"},getPost);
// console.log(obj);




/////////////call backs are functions within the functions////////

// function add(x,y){
//     return x*y;
// }

// function sum(m,n,hello){
//     return hello(m,n)  
// }
// console.log(sum(10,3,add));