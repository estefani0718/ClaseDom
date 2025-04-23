let win = window;
let dom=document;

// const arreglo = { ...header };
// arreglo.map((elemento) => { console.log(elemento); });
// header.map((elemento) => { console.log(elemento); })
// console.log(win);

let header =document.querySelectorAll("main p ");// todas las coincidencias de p
// console.log(header);
// let container = document.getElementsByClassName("container");//la clase 
let container = document.querySelector("container");//la clase

let api =document.querySelector("#api");
api.textContent = "ya no quiero estudiar mas ";


let formulario = document.forms;
let imagenes= dom.images;
let script = dom.scripts; 
let stilos = dom.styleSheets;
console.log(script);
console.log(imagenes);
console.log(stilos);
let lista = document.querySelector("ul")//lista desordenada

let li=dom.querySelectorAll("ul.li>li.item ");// 

let card = document.querySelectorAll("div.cards>div.card");
let cards = document.querySelector("div.cards")

console.log(cards.childNodes);//los hijos de los elementos
console.log(cards.children);//todos los hijos
console.log(cards.parentElement);//el elemento padre 
console.log("hermano"+cards.previousElementSibling);//el hermano anterior

let body = document.querySelector("body");
console.log(body.previousElementSibling);//el hermano anterior a body
let elemento = document.querySelector("#elementos2");
elemento.textContent = "nuevo texto";
elemento.innerHTML="<p>nuevo texto</p><p>nuevo texto</p>";// agregar el  texto en el html dentro del div creado 
// body.classList.add("bg-red");
setTimeout(() => {
    body.classList.add("bg-red");
}, 6000);
console.log(body.classList);

