// EFEITO DE DIGITAÇÃO

const text = [
"Desenvolvedor Web",
"Programador C / C++",
"Entusiasta de Eletrônica",
"Estudante da FATEC"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type, 1500);
}else{
setTimeout(type, 80);
}

}

type();


// SCROLL SUAVE NO MENU

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

window.scrollTo({
top: target.offsetTop - 70,
behavior: "smooth"
});

});

});


// HEADER MUDA AO ROLAR

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "rgba(13,17,23,0.95)";
header.style.borderBottom = "1px solid #333";
}else{
header.style.background = "rgba(13,17,23,0.85)";
}

});


// ANIMAÇÃO AO APARECER NA TELA

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}

});

});

document.querySelectorAll(".card, .card-cert").forEach(el => {

el.style.opacity = 0;
el.style.transform = "translateY(40px)";
el.style.transition = "0.6s";

observer.observe(el);

});

particlesJS("particles-js", {
"particles":{
"number":{
"value":60
},
"size":{
"value":3
},
"color":{
"value":"#58a6ff"
},
"line_linked":{
"enable":true,
"color":"#58a6ff",
"opacity":0.3
},
"move":{
"speed":1.5
}
}
});
