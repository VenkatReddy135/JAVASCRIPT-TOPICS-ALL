let student={ name:"venkat",age:23,
health:function(){
    return `he is active`;

}
}
console.log(student.health());
console.log(typeof student);
var hey= JSON.stringify(student); ///converts the object into the string
console.log(typeof hey);
var you=JSON.parse(hey);  ///converts the string into the objectt
console.log(typeof you);
console.log(you.name, you.age);



