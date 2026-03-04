"use script";

const animals = [
    {name: "Simba", species: "løve", age:"5", food: "kød"},
    {name: "Dumbo", species: "elefant", age:"8", food: "Blade og frugt"},
    {name: "Gerald", species: "giraf", age:"6", food: "Blade fra høje træer"}
];

 const infobox = document.getElementById("infobox");

 // Klik på første dyr
document.querySelector(".animal1").addEventListener("click", function()
{
infobox.innerHTML =
"<strong>" + animals[0].name + "</strong><br>" +
"Art: " + animals[0].species + "<br>" +
"Alder: " + animals[0].age + " år<br>" +
"Føde: " + animals[0].food;

// VIS boksen
infobox.classList.add("show");
setTimeout(function(){
  infobox.innerHTML = "";
  infobox.classList.remove("show");
}, 2000); });

 // Klik på anden dyr
document.querySelector(".animal2").addEventListener("click", function()
{
infobox.innerHTML =
"<strong>" + animals[1].name + "</strong><br>" +
"Art: " + animals[1].species + "<br>" +
"Alder: " + animals[1].age + " år<br>" +
"Føde: " + animals[1].food;

// VIS boksen
infobox.classList.add("show");
setTimeout(function(){
  infobox.innerHTML = "";
  infobox.classList.remove("show");
}, 2000); });

 // Klik på tredje dyr
document.querySelector(".animal3").addEventListener("click", function()
{
infobox.innerHTML =
"<strong>" + animals[2].name + "</strong><br>" +
"Art: " + animals[2].species + "<br>" +
"Alder: " + animals[2].age + " år<br>" +
"Føde: " + animals[2].food;

// VIS boksen
infobox.classList.add("show");
setTimeout(function(){
  infobox.innerHTML = "";
  infobox.classList.remove("show");
}, 2000); });