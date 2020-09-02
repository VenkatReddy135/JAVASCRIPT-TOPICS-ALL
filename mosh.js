/*function Circle(radius){
    this.radius=radius;
    let defaultLocation={x:1,y:2};
  
    let computeOptimumLocation=function(){
         x=10;
         y=20;
         return x+y;
     }

     this.draw=function(){
       return defaultLocation;
     }

  
    }*/

/*const circle=new Circle(1)
console.log(circle.draw());





/*function add(){
    let x=10;
    let y=20;
    return (function(){
        return x+y;
    }());
}
console.log(add());*/


//Primitive data types [they are copied by values]

/*let x=10;
let y=x;
x=20;
console.log(y);

// Reference data types [they are copied by reference]

let x={value:10};
let y=x;
x.value=20;
console.log(x);
console.log(y);*/



let array=["banana","orange","apple","mango"];
let Y=array.slice(0,2);
console.log(Y);


z=[[1,2,3,5,x={x:4,y:5}],[2,3.5,4]]
for(y of z){
    console.log(y);
}















