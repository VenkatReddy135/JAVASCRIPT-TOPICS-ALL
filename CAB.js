
/////////call(),apply(),bind() are the built-in methods of the Function////////
/// They change the context of the function////

// call() method will passes just the arguments

// function foo(a,b){
//     console.log(this, a,b)
// }
// foo.call({a:1},9,29);



// /// apply() method passes the array of arguments

// function foo(a,b){
//     console.log(this.a, a,b)
// }
// var args=[9,19]
// foo.apply({a:1},args);



///// bind creates the new function and will call the new function

// function foo(x,y){
//     console.log(this,x,y);
// }
// var fooCall=foo.bind({name:"venkat"});
// fooCall("ojas","hyd");




