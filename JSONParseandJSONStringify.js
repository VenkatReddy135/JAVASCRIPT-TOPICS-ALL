//JSON.stringify()  ===> converts the object to string
//JSON.parse()      ===> converts the converted string to object

//// you have to convert because the local storage and session storage only 
////accepts string type values but  not anything else

////////////////Real working Example//////////////

// let venkat={id:1,name:"venkatReddy",location:"hyderabad"};

// const objtostring=JSON.stringify(venkat);

// localStorage.setItem("hi",objtostring); ///setting the stringified object into the local storage

// var getItem=localStorage.getItem('hi'); ///getting the value from the local storage
// console.log(JSON.parse(getItem));

// localStorage.removeItem('hi');  //removing item from the local storage

     

// //// converting string to number
// var str="122345";
// var y=parseInt(str);
// console.log(typeof y);

// ///converting number to string
// var m=12345;
// var n=m.toString()
// console.log(typeof n)




/////Real example/////////////

///////////converting obj to string and string to object////////////


// var obj=`{"name":"venkat","age":20}`;
// var obj1=JSON.parse(obj);
// console.log(obj1);

// var obj2=JSON.stringify(obj1);
// console.log(obj2);