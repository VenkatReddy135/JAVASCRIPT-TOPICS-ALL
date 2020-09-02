//Currying refers to the process of transforming a function
 //with multiple arity into the same function with less arity. 
 //The curried effect is achieved by binding some of the
 // arguments to the first function invoke,
 //so that those values are fixed for the next invocation


var babaAnimals=function(a){
    return function(b){
       var result='i love'.concat(a).concat(' and ').concat(b)
       return result;
    }
    
}
var babyKoala=babaAnimals('koalas');
console.log(babyKoala('elephants'));
console.log(babyKoala('horses'));
console.log(babyKoala('ducks'));