let ul = document.getElementById("ulMenu");

let linkArray = ul.getElementsByTagName("a");

for (let i = 0; i < linkArray.length; i++) {
   linkArray[i].addEventListener("mouseenter", enter);
   linkArray[i].addEventListener("mouseleave", (e) => {
      e.target.style.backgroundColor = "transparent";
   });
}

function enter(e) {
   e.target.style.backgroundColor = "#555";
}

