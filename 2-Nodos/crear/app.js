let padre = document.querySelector(".container");
let node = document.createElement("h2");
node.textContent = "titulo de segundo nivel";
let texto = document.createTextNode("palabra para el nodo de texto");
padre.appendChild(node);
padre.appendChild(texto);



let lista = document.querySelector("#list");
// creamos la etiqueta 
let html = document.createElement("li");
let css = document.createElement("li");
let js = document.createElement("li");

// agregamos los estilos
html.classList.add("item");
css.classList.add("item");
js.classList.add("item");
//le agregamos el texto 
html.textContent = "html";
css.textContent = "css";
js.textContent = "js";

lista.append(html, css, js);//agregar al elemento capturado


let card = document.querySelector(".card");
let lista_card = card.querySelector("#list");
let title = document.createElement("h2");
title.textContent = "titulo de card ";
// card.append(title);
console.log(lista_card);

card.insertBefore(title,lista_card);
console.log(card);


//agregar nodos adyacentes
let beforebegin = document.createElement("li");
beforebegin.classList.add("item", "before");
beforebegin.textContent = "1,Nuevo contenido ubicado antes de la lista desordenada  ";

let afterbegin = document.createElement("li")
afterbegin.classList.add("item");
afterbegin.textContent = "2,nuevo contenido ubicado al incio de la lista desordenada";

let beforeend = document.createElement("li");
beforeend.classList.add("item", "before");
beforeend.textContent = "3,nuevo contenido ubicado al final de la lista desordenada";

let afterend = document.createElement("li");
afterend.classList.add("item");
afterend.textContent = "4,nuevo contenido ubicado despues de la lista desordenada";

lista_card.insertAdjacentElement("beforebegin", beforebegin);//1
lista_card.insertAdjacentElement("beforeend", beforeend)//3
lista_card.insertAdjacentElement("afterbegin", afterbegin);//2
lista_card.insertAdjacentElement("afterend", afterend);//4

// los dias de la semana

let dia = document.querySelector("#dias");
const dias = [
  {
    id: 1,
    name: "lunes",
    img: "https://picsum.photos/id/237/200/300",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas!"
  },
  {
    id: 2,
    name: "martes",
    img: "https://picsum.photos/id/237/200/300",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas!"
  },
  {
    id: 3,
    name: "miercoles",
    img: "https://picsum.photos/id/237/200/300",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas!"
  },{
    id: 4,
    name: "jueves",
    img: "https://picsum.photos/id/237/200/300",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas!"
  },
  {
    id: 5,
    name: "viernes",
    img: "https://picsum.photos/id/237/200/300",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas!"
  },
  {
    id: 6,
    name: "sabado",
    img: "https://picsum.photos/id/237/200/300",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas!"
  },
  {
    id: 7,
    name: "domingo",
    img: "https://picsum.photos/id/237/200/300",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas!"
  }
]

dias.map((semana) => {
  
  console.log(semana);
  // crear los elemtntos 
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let card_titulo = document.createElement("h2");
  let card_body = document.createElement("div")
  let img = document.createElement("img");
  let parrafo = document.createElement("p");
    
  // agregar el texto 
  card_header.textContent = semana.name;
  parrafo.textContent = semana.paragraph;

// agregar estilos 
  card.classList.add("card")
  card_header.classList.add("card__header");
  card_titulo.classList.add("card__title");
  card_body.classList.add("card__body");
  img.classList.add("card__img")
  parrafo.classList.add("card__paragraph")

  // administar atributos 
  img.setAttribute("src",semana.img)
  img.setAttribute("alt", semana.name)

  // unir elementos
  card_body.append(img,parrafo)
  card_header.append(card_titulo)
  card.append(card_header)
  card.append(card_body)
  dia.append(card);

});


