var obj=[{name:"venkat",age:25},{name:"shiva",age:30},
{name:"pawanKalyan",age:45}];

   var output='';
for(i=0;i<obj.length;i++){
    // output += "<li>"+obj[i].name+ "</li>" +"<br>";
        output+=`<li>${obj[i].name}</li><br>`   //templateLiteral Syntax
}
// document.write(output);
document.querySelector("#sehwag").innerHTML=output;


