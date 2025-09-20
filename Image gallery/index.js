let ScrollController=document.querySelector(".gallery");
let backbtn=document.getElementById("backbtn");
let nextbtn=document.getElementById("nextbtn");

 ScrollController.addEventListener("wheel",(event)=>{
  event.preventDefault();
  ScrollController.scrollLeft+=event.deltaY;
   ScrollController.style.scrollBehavior="auto"
 });

 backbtn.addEventListener("click",()=>{
  ScrollController.style.scrollBehavior="smooth"
   ScrollController.scrollLeft-=ScrollController.clientWidth;
 });

  nextbtn.addEventListener("click",()=>{
   ScrollController.style.scrollBehavior="smooth"
   ScrollController.scrollLeft+=ScrollController.clientWidth;

 })