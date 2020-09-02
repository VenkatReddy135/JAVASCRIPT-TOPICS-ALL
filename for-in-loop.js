
var object={"name":"venkat","age":50}
// var obj1=["hello","venkat","ravi"]

// for(let pro in object){
//     console.log(pro);  // here output name,age
// }
// for(let i in obj1){
//     console.log(i)    //here output 0,1,2
// }


for(keys in object){
    console.log(keys);
}

for(value in object){
    console.log(object[value])
}