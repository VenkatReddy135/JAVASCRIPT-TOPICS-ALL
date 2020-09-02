
//////////////////////////Promies/////////////////

// var add1=function(){

// var promise=new Promise(function(resolve,reject){
// var xhr=new XMLHttpRequest();
// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
// xhr.onload=function(){

//         resolve(JSON.parse(xhr.responseText));
   
// }
// xhr.send()
// })
// return promise;
// }


// function add(){
// add1().then(function(result){
//     console.log(result);
// }).catch(function(result){
//     console.log(result.statusText);
// })
// }



//////////////////////fetch/////////////////////////

  ///no Need of new promise resolve ,reject
 ///GetData  both success and error 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response=>{
//    return response.json()
// }
// )).then(res=>console.log(res))
// .catch(error=>consol.log(error.message));
  

//////////////////PostData using fetch()///////////////
//Posting the below info to the server

// var obj1={userId: 1,title: "venkatReddy", completed: true}


// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method:'POST',
//     body:JSON.stringify(obj1)
// },{
//     headers:{
//         'Content-Type':'application/json'
//     }
// }).then(function(result){
//     return result.json()
// }).then(function(response){
//     console.log(response);    //{id:201} means posted successfully
// }).catch((error)=>{
//     console.log(error.message) 
// });




////////////////////////////AsyncAwait//////////////////

//Not using promises 

//////////////async await //////


/////////Get data//////

// async function main(){
//     var data=await fetch('https://reqres.in/api/users');
//     var result=await data.json();
//     console.log(result);
//   }
//   main();



  /////Get data and showng error messages

//   async function main(){
//       try{
//     var data=await fetch('htssdsds');
//     var result=await data.json();
//     console.log(result);
//       }catch(error){
//           console.log(error)
//       }
//   } 
//   main();







