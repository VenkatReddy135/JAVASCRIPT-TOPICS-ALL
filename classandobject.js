               //1)Basic object//

// let Car={car_name:"benz",
// car_model:"x-4",
// car_functionality:function(){
// return `${this.car_model} works at awesome speed`;
// }};
// Car.fast="high speed";
// console.log(Car.car_functionality());
// console.log(Car.fast);






          //2)object constructer method to create objects//

// function Employee(fname,lname,salary){
//     this.fname=fname;
//     this.lname=lname;
//     this.salary=salary;
//     this.capacity=function(){
//       return `${this.fname} ${this.lname} works at great speed`;
//     }
// }
// // Employee.isRight=true; //////wrong

// Employee.prototype.isRight=true;   
//     var emp1=new Employee("venkat","reddy",50000);
//     var emp2=new Employee("hari","krishna",25000);
//     console.log(emp1.isRight);
    

//     ///sub classes  using object constructor functions

// function Emp(fname,lname,salary,age){
//     Employee.call(this,fname,lname,salary)
//     this.age=age;
// }

//  Emp.prototype=Object.create(Employee.prototype);

// var std=new Emp("venkat","reddy",2000,25);
// console.log(std.isRight);







          //3)using class  to create objects in Es6 //

//     class Book{
//        constructor(name,author,chapters,pages){
//            this.name=name;
//            this.author=author;
//            this.chapters=chapters;
//            this.pages=pages;
//        }
//        getsummary(){
//            return `${this.name} is written by ${this.author}`;
//        }
//        readpages(x){
//            var total= this.pages -x;
//            return `i have read ${total}`
//        }

//     }
//     Book.prototype.behaviour="satisfied";
//     var book1=new Book("harrypotter","harry",20,200);
//     var book2=new Book("silence","dev",16,300);
//     console.log(book1.behaviour);
    
//    class Magazine extends Book{
//        constructor(name,author,chapters,pages,isdone){
//            super(name,author,chapters,pages);
//            this.isdone=isdone;
//        }
    
//        }
// var mag1=new Magazine("gigel","pink",25,500,true);
// console.log(mag1.isdone);
// console.log(mag1.getsummary())


