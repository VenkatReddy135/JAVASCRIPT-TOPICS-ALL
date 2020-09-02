
//////The Array.from() method creates a new, shallow-copied 
////Array instance from an array-like or iterable object.


// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// console.log(set)    ////output: Set(3) {"foo", "bar", "baz"}
// var x=Array.from(set);
// console.log(x)   ////output (3) ["foo", "bar", "baz"]


///By using array.from() method  we can convert object elements
// into array of elements  removing the duplicates and loop over them;


// var m=new Set(["venkat","raja","shiva","hari","venkat"]);
// console.log(m);
// var n=Array.from(m);
// console.log(n);
// n.forEach(function(element,index){
//      console.log(`The name of the student is ${element} and his number is ${index+1}`);
// });





///Looping through an oject array..

// let bigHero={characters:[
// {name:"venkat",voice:"dsp"},
// {name:"shanker",voice:"thaman"},
// {name:"kalyan",voice:"harishjayraj"},
// {name:"pawan",voice:"sidsriram"}
//      ]
//     }

//     bigHero.characters.forEach(function(element){
//          console.log(element.voice);
//     })






