

let section = document.getElementById('idSec');

section.addEventListener("click", sectionClick)

let p = document.getElementById("idP1");

p.addEventListener("click", pClick)

function sectionClick(e){
   e.currentTarget.style.color = "green";
   e.target.style.color = "red";
}

function pClick(e){
   p.innerText = "XXXXXXXXXXXXXX"
}


// Läs in alla li. Blir en array.
let liArray = document.getElementsByTagName('li');

// Skapa händelselyssnare till alla li
for(let i = 0; i < liArray.length; i++){
   liArray[i].addEventListener("click", changeColor);
}

// Funktionen som körs då man klickar på li
function changeColor(e){
   e.target.style.color = "red";
}

// Lägg till element i listan (ul/li)
let letter = 'D'

let btn = document.getElementById('btnAdd');
btn.addEventListener("click", addToList);

function addToList(e){
   let ul = document.getElementById('list');

   let li = document.createElement('li');
   li.innerText = "XX";
   //li.innerText = letter;
   //letter = String.fromCharCode(letter.charCodeAt(0) + 1);

   ul.appendChild(li);
}

// JSON-enkel
let person = {"name": "Lisa", "age": 33};

console.log(person.name);
console.log(person.age);

// JSON-array
let data = [{"name": "Lisa", "age": 33}, {"name": "Jan", "age": 12},{"name": "Sten", "age": 18}];

for(let i = 0; i < data.length; i++){
   console.log(data[i].name + ", " + data[i].age);
}

// input värden
let btnCalc = document.getElementById('btnCalc');
btnCalc.addEventListener("click", calc);

function calc(){
   let num = document.getElementById("n1").value;
   let sqr = Number(num) + Number(num);

   document.getElementById('op1').innerText = sqr
}

