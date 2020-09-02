//////////////////////    1)MAP       ////////////////////

// Map is a collection of keyed data items, just like an Object.
// But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count





// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value],
// it’s used by default in for..of.



///Example 1

// let map = new Map();

// map.set('hello', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// alert( map.get(1)   ); // 'num1'
// alert( map.get('hello') ); // 'str1'

// alert( map.size ); // 3




/////Example 2


// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
//   }
  
//   // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     alert(entry); // cucumber,500 (and so on)
//   }








/////////////////     2)SET      /////////////////////

// A Set is a special type collection – “set of values” (without keys), 
//where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.






/////////////////////////////Example of set/////////////////////

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// alert( set.size ); // 3

// for (let user of set) {
//   alert(user.name); // John (then Pete and Mary)
// }






//We can loop over a set either with for..of or using forEach:

// let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) 
// {
//     alert(value);
// }

// // the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });



// The same methods Map has for iterators are also supported:

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
// Summary
// Map – is a collection of keyed values.








//////////////Methods and properties://////////

//new Map([iterable]) – creates the map, with optional iterable //
// (e.g. array) of [key,value] pairs for initialization.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.






////////////////////////Real examples///////////////

////////////////////////////////1)Maps////////////////////
    //  var map =new Map();

       //getting the values to the map

// map.set(1,"venkat");  //key value pair
// map.set(2,"hello")    //key value pair
// map.set(3,"ravi");    //key value pair
// console.log(map);

       //get method  to get the values of the map

// var m=map.get(1);
// console.log(m)

        /// delete methd

// map.delete(2);
// console.log(map)

       ////to find keys in the map

// for(i of map.keys()){
//     console.log(i)
// }


       //to find the values of the map

// for(value of map.values()){
//     console.log(value);
// }

       ////knowing the size of the map

// var m=map.size;
// console.log(m);

      /////clearing all the key value pairs in the map to zerp

//    map.clear()

//    console.log(map);



//////////////////////////sets//////////////////

///// it will only consider the unique keys

/////////one way of adding i.e adding the objects/////

// let set =new Set();

// let john={id:2,name:"johnKeneddy"};
// set.add({id:1,name:"venkat"});  ///one way of adding the values
// set.add(john);   /////anothe way of adding is assigning the variable
// console.log(set)

// let arr=Array.from(set); /////convert the object values to array values
// console.log(arr);

///to loop over the set values////

// for(item of arr ){
//     console.log(item.name);
// }

///



////real examples of map by hitesh chaudary

let obj1={name:"venkat",id:1,age:30}
let obj2={name:"siva",id:2,age:20}
let obj3={name:"ravi",id:3,age:33}

var map=new Map();
map.set('obj1',obj1);
map.set('obj2',obj2);
map.set('obj3',obj3);
console.log(map);

console.log(map.size);

for (const key of map.keys()) {
       console.log(key)
       
}

for (const  value of map.values()) {
       console.log(value)
       
}


for (const [key,value] of map.entries()) {
       console.log(key,value)
       
}






