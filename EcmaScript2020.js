//////////object inside an object

///url for Es6 features =>    https://webapplog.com/es6/


// let obj={name:{surname:"venkat",age:20}};
// console.log(obj.name.surname)

//////////es20 features

         //wrong way
// let obj={name:{surname:"shiva",age:0}};
// console.log(obj.name.surname || 'venkat')
// console.log(obj.name.age || 21)


//       // correct way
// let obj={name:{surname:"shiva",age:0}};
// console.log(obj.name.surname ?? 'venkat')
// console.log(obj.name.age ?? 21)


////////////another method
// let obj={name:{}};
// console.log(obj.name.surname ?? 'venkat')
// console.log(obj.name.age ?? 21)


