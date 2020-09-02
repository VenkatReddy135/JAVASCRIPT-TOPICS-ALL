
////////////////Normal async and Await function()////////////////////

// async function main(){
//     var data=await fetch('https://reqres.in/api/users');
//     var result=await data.json();
//     console.log(result)
//   }
//   main();


//higher level async and await
// var x=[]
// async function main(){
//   var data=await fetch('https://reqres.in/api/users');
//   var result= await data.json();
//     x.push(result.data);
// }
// main();
// console.log(x);



//This is how we fetch the data from the api and display it in th browser
//var x=fetch('https://reqres.in/api/users');
//x.then(res=>res.json()).then(result=>document.write("<h1>"+result.ad.text+"</h1>"));


////////Another Example//////


// function add(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("javascript Everywhere")
//         },2000);
//     })
// }

// function add1(){
//     console.log("hello world")
// }

// async function newAdd(){
//          add1()               /////executes this line first
//         await add().then(result=>{    ///////next this line and if it is true exectutes next line
//             console.log(result)
//         });
//         console.log("iam venkat");    /////finally if true this line gets executed      
// }
// newAdd();


