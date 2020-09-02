///creating objects using constructor functions
/////////how to apply  Inheritance to constructor functions////////////


// function Book(author,title,year){
//     this.author=author;
//     this.title=title;
//     this.year=year
// }
// Book.prototype.getSummary=function(){
//     return `${this.author} has written ${this.title} in ${this.year}`  
// }
  
// let book1=new Book("venkat","His Biography",2020);
// console.log(book1.getSummary());


//by using .call() method we can inherit Book properties to magazine

// function Magazine(author,title,year,month){
//     Book.call(this,author,title,year);
//     this.month=month;
   
// }
//  Magazine.prototype=Object.create(Book.prototype);
// let mag=new Magazine("shanker","mahabharatham",2020,"may");
// console.log(mag.getSummary());

//  Magazine.prototype.constructor=Magazine;  // here this line changes proto=> constructor=> book in console to magazine
// console.log(mag.month);






//creating objects using clases and applying inheritance///////////

class Person{
    constructor(name,age,color){
        this.name=name;
        this.age=age;
        this.color=color;
    }

    getSummary(){
        return `${this.name} has age ${this.age} and color ${this.color}`
    }
}
let emp1=new Person("jagan",45,"white");
let emp2=new Person("ysr",70,"white");
emp2.speed="high";     /// adding new properties
console.log(emp1.getSummary());
console.log(emp2.getSummary());
console.log(emp2.speed);



class Manager extends Person{
    constructor(name,age,color,id){
        super(name,age,color);
        this.id=id;
    }
    getSummary(){
        return `${this.name} has age ${this.age} and color ${this.color} and an id ${this.id}`
    }
}

var mag1=new Manager("ashok",24,"red",1);
console.log(mag1.getSummary())











