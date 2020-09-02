// let Mywork={
//     day:"monday",
//     meetings:0,
//     meetDone:0,
//     addmeetings:function(num){
//        return this.meetings=this.meetings+num;
//     },
//     getSummary:function(){
//         return `i have a total of ${this.meetings} meetings today`
//     },
//     reset:function(){
//       this.meetings=0;
//         this.meetDone=0;
//         return `i have ${this.meetings} meetings today`
//     }

// }
// Mywork.output=`it was all over`;       ///adding extra objects///
// console.log(Mywork.addmeetings(4));
// console.log(Mywork.getSummary());
//  console.log(Mywork.reset());
// console.log(Mywork.output);


// obj={'0':1,0:2};
// var ven=obj['0'] + obj[0]
// console.log(ven);


//one way of getting the value

// var obj={"id":1,"name":"venkat","fNmae":"venkatReddy"};
// console.log(obj.id);     //output is 1


//anothe way of getting the values

// var obj={"id":1,"name":"venkat","fNmae":"venkatReddy",};
// console.log(obj['id']);   ///output is venkat




//creating an object called  car and setting all the 
//properties of the cr into an object called car;

let car={
    make:"benz",
    model:"745li",
     year:2014,
    price:function(){
    return 500000;
     },
    getDescription:function(){
    return this.make +" "+ this.model +" "+ "works at a great speed";
}
}
console.log( typeof car);
console.log(car);
console.log(car.make);
console.log(car.getDescription());


