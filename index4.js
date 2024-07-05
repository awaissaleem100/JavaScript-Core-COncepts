/*
var button= document.getElementById("btn");
button.addEventListener('click',function(){
    console.log("I am clicked");
})
   
button.onclick=function(){
      console.log("I am clicked");
}
       */
    var div=document.getElementById("div");
 
function eventHandler(){
    console.log("The button is clicked!");
}
   
   var redirection=true;
   if(redirection){
    window.location= "https://youtube.com"
   }

/*
setTimeout(function(){
    console.log("redirecting");
    window.location = 'https://google.com' 
},5000)
*/

/* setTimeout(function(){
    console.log("redirecting");
    window.location = 'https://google.com'
},5000)

*/
  var d= new Date();
    console.log(d.toLocaleString());
    var d= new Date;
    console.log(d.getDate());
function eventHandler(event){
    console.log(event);
     console.log(Math.floor(Math.random()*255));
div.style.background = `rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)})`;


}
setInterval(eventHandler,5000);      
y=null;
console.log(typeof y);