const words=["Desenvolvedor","Programador","Criador"];

let i=0;
let j=0;
let current="";

function type(){

if(j<words[i].length){

current+=words[i][j];

document.querySelector(".typing").innerHTML=current;

j++;

setTimeout(type,100);

}else{

setTimeout(erase,1500);

}

}

function erase(){

if(j>0){

current=current.slice(0,-1);

document.querySelector(".typing").innerHTML=current;

j--;

setTimeout(erase,50);

}else{

i=(i+1)%words.length;

setTimeout(type,500);

}

}

type();

particlesJS.load('particles-js','https://cdn.jsdelivr.net/npm/particles.js-config@1.0.1/particles.json');