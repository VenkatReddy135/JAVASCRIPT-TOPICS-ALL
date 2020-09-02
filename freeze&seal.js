    
    //////////////////////////Object.seal()///////////
    /// can't delete  but can read and update object properties and methods


    // creates an object 
    // var obj = {  
    //     value: 10 
    // }; 
    //  Object.seal(obj); 
    // obj.value = 20;        // // the value gets updated to 20 
    // console.log(obj.value); ////output 20;
    // delete obj.value;      ////cant delete if we use seal
    // console.log(obj);     //output {value:10}




    /////////////////////////object.freeze()//////////////////
    //can't delete or update object properties if we use freeze method

//    obj1={value:20};
//    Object.freeze(obj1);
//    obj1.value=30;   //cant update the value after freeze
//    console.log(obj1);
//    delete obj1.value;   //cant delete the object properties if we use seal
//    console.log(obj1);

