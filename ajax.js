function LoadData(){
var country=document.getElementById("country").value;
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
    var responseData=xhttp.responseText;
    var jsonData=JSON.parse(responseData);
    var res=jsonData[0].capital;
    console.log(res);
    document.getElementById("capital").innerHTML=res;
}
}
xhttp.open("GET","https://restcountries.eu/rest/v2/name/"+country+"?fullText=true ",true);
xhttp.send();
}