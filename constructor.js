

// function Cars(car_model,car_cost,car_color){
//     this.car_model=car_model;
//     this.car_cost=car_cost;
//     this.car_color=car_color
//     this.car_functionality=function(){
//         return `my car ${this.car_model} works really fast`
//     }
// }
//     var car1=new Cars("tesla",25,000,"blue");
//     var car2=new Cars("benz",30,00,"yellow");
//     console.log(car2.car_functionality()); 
    

 class Employee{
     constructor(Fname,Lname,Id){
         this.Fname=Fname;
         this.Lname=Lname;
         this.Id=Id;
 }
 getFullName(){
     return `my full name is ${this.Fname} ${this.Lname}`;
 }
 }
 let emp1=new Employee("harry","pooter",456);
 let emp2=new Employee("venkat","reddy",24);
 console.log(emp1.getFullName());
 console.log(emp1);

    





        


        


