/*

  4 pillars of Dom
  1). selection of an element
 2). Changing Html
 3). Changing Css
 4). Event listener
*/

 //var a = document.querySelector("h1")
 //console.log(a)
 
 // CHANGING HTML -----
 //var a = document.querySelector("h1")
 //a.innerHTML = "HTML CHANGED"

 //CHANGING CSS--------
 //a.style.color= "black"

 // EVENT LISTENER-----
 /*var a = document. querySelector("h1")
a.addEventListener("click",function(){
   
    a.innerHTML = "Badal gya main"
    a.style.color= "pink"
    a.style.backgroundColor= "green"
})*/

 var bulb = document.querySelector("#bulb")
  var btn = document.querySelector("button")
  btn.addEventListener("click",function(){
    bulb.style.backgroundColor = "yellow"
  })

  


