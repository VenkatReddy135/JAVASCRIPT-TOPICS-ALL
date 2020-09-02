
// map & set() sets the object into a variable

var employee={
    name:"venkat",
    age:10,
    profession:"doctor",
    isdone:true
}   

var sam={
    name:"hey iam sam",
    age:10,
    isdone:true
}
var user=new Map();
user.set('venkat',employee);
user.set('samantha',sam);
console.log(user.get('venkat'));



for(value of user.values()){
    console.log(value);
}
console.log(user);






