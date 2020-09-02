let car={ make:"audi",
model:"745iu",
year:2010,
getCar:function(){
    return this.make+" "+this.model;
}
}
car.engine="320cc";

//creating a proto(car1) othe object car
let car1=Object.create(car);
console.log(car1);
console.log(car);


//creating an entirely a new object not proto we use the below property
let car2=Object.getPrototypeOf(car1);
//creating a prototype of car2 of car1 which itself is a prototype of car
let car2=Object.create(car1)
//console.log(car2);
car2.engine="320cc"
////Object.hasOwnPropert() checks whether that object has
//its own propery called make??? not its proto object
console.log(car1.hasOwnProperty('make'))
//setting a prototype on car object;
Object.setPrototypeOf(car,{speed:"great"}); 
console.log(car)