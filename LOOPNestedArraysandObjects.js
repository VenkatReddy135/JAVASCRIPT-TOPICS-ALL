///////////       NESTED ARRAYS    //////////////

 var venkat=[[1,2,3,4,5,6,7],[8,10,5,7,3,22,6,42],[122,54,12,11,9,15]];

for(i=0;i<venkat.length;i++){
    if(venkat[i].length==7){
       venkat[i].forEach(function(item){
           if(item !== 3 && item !== 5){
                console.log(item)     
           }   
        })      
}
};



///////////////    NESTED OBJECTS   //////////////



let bigHero={ characters:
    [
    {name:"venkat",voice:"dsp"},
    {name:"shanker",voice:"thaman"},
    {name:"kalyan",voice:"harishjayraj"},
    {name:"pawan",voice:"sidsriram"}
    ]
        };

// let x=bigHero.characters;
// x.forEach(element => {
//     // if(element.name=="venkat"){
//     // console.log(element.voice);
//     // } 
// });



let x=bigHero.characters;
x.forEach(element => {
    if(element){
        console.log(element.name,element.voice);
        
    }
});