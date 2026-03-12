

let section = document.getElementById('idSec');

section.addEventListener("click", sectionClick)

let p = document.getElementById("idP1");

p.addEventListener("click", pClick)

function sectionClick(e){
   e.target.style.color = "green";
}

function pClick(e){
   p.innerText = "XXXXXXXXXXXXXX"
}

let liArray = document.getElementsByTagName('li');

for(let i = 0; i < liArray.length; i++){
   liArray[i].addEventListener("click", changeColor);
}

function changeColor(e){
   e.target.style.color = "red";
}