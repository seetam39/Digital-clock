const box1=document.getElementById("box1");
const box3=document.getElementById("box3");
const box5=document.getElementById("box5");
const box6=document.getElementById("box6");
const span1=document.getElementById("span1");
const span2=document.getElementById("span2");
const span3=document.getElementById("span3");


setInterval(()=>{
let time=new Date();
let hr=time.getHours();
box1.innerHTML=hr;
let min=time.getMinutes();
box3.innerHTML=min ;

let sec=time.getSeconds();
box5.innerHTML=sec ;

},1000)

let month=["January","February","March","April ","May","June ","July","August","September" ,"October","November","December"]
let dates=new Date();

let date=dates.getDate();
span1.innerHTML=date;

let mon=month[dates.getMonth()];
span2.innerHTML=mon;

let year=dates.getFullYear();
span3.innerHTML=year;





