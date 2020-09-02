////////////using Factory functions to create objects

//generally factory functions returns an object and we dont use
 // "new or this"   keyword....

// function Circle(radius){
//     return {
//         radius:radius,
//         draw:function(){
//             return `${this.radius} and venkat`
//         }
//     }
// }
// const c1=Circle(1);
// console.log(c1.draw());



/////////////using constructor functions to create objects/////

///////we use new and this keyword for constructuors


// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         return ` ${this.radius} and venkat`;
//     }
// }

// const c1=new Circle(1);
// const c2=new Circle(2);

// console.log(c1.draw());
// console.log(c2.draw());



