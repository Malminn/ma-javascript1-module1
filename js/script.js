/* ---------------- 1 --------------- */
function meow() {
   console.log("Meow!");
}

const cat = {
   complain: meow(),
};

/* ---------------- 2 --------------- */

var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

/* ---------------- 3 --------------- */

heading.style.fontSize = "2em";

/* ---------------- 4 --------------- */

heading.className = "subheading";

/* ---------------- 5 --------------- */

var paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
   paragraphs[i].style.color = "red";
}
/* ---------------- 6 --------------- */

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.color = "yellow";

/* ---------------- 7 --------------- */

var cats = [
   {
      name: "Blob",
      age: 10,
   },
   {
      name: "Harold",
   },
   {
      name: "Blurt",
      age: 21,
   },
];

function list(parameter) {
   for (let i = 0; i < parameter.length; i++) {
      console.log(parameter[i].name);
   }
}
list(cats);

function createCats(cats) {
   for (let i = 0; i < cats.length; i++) {
      var div = document.createElement("div");
      let h5 = document.createElement("h5");
      h5.innerHTML = cats[i].name;
      div.appendChild(h5);

      let p = document.createElement("p");
      p.innerHTML = cats[i].age;
      div.appendChild(p);

      document.querySelector(".cat-container").appendChild(div);
   }
}
createCats(cats);

var node = document.createElement("LI"); // Create a <li> node
var textnode = document.createTextNode("Water"); // Create a text node
node.appendChild(textnode); // Append the text to <li>
document.getElementById("myList").appendChild(node); // Append <li> to <ul> with id="myList"
