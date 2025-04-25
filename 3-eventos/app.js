import { validar } from "./modulo.js";
//validarCamporVacios,
// variables
const formulario = document.querySelector("form")
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="contrasena"]');
const pol = document.querySelector("#politicas");
const boton = document.querySelector("btn_validar");

// const btn = document.querySelector("#btn_validar");

//funciones
const validarText = (event) => {
  let letra = event.key;
  const regexTexto=/^[a-zA-Z]+$/;
  if(!regexTexto.test(letra)){
    event.preventDefault();
  }

}
const validarNum = (event) => {
  let letra = event.key;
  const regexNumeros=/^\[0-9]$/
  if(!regexNumeros.test(letra)){
    event.preventDefault();
  }
}
// const validarContaseña = (event) => {
//   let letra = event.key;

// }
const campo=(event)=>{
  if (event.target.value !== "") {
    event.target.classList.remove("input__border")
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove()
    }
  }
}

const politicas = () => {
    addEventListener("DOMContentLoaded", (event) => {
    if (!pol.checked) {
       boton.setAttribute("disable","")
      }
    else {
       boton.removeAttribute("disable")
      }
  })
 }

// Eventos
formulario.addEventListener("submit", validar );
nombre.addEventListener("blur", campo);
apellido.addEventListener("blur", campo);
// telefono.addEventListener("blur", campo);
// documento.addEventListener("blur", campo);

nombre.addEventListener("keydown", validarText);
apellido.addEventListener("keydown", validarText);
// telefono.addEventListener("keydown", validarNum);
// documento.addEventListener("keydown", validarNum);
usuario.addEventListener("keydown",validarText);
// contrasena.addEventListener("keydown",);

addEventListener("DOMContentLoaded", politicas);
pol.addEventListener("change",politicas)
