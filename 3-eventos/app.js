// variables
const formulario = document.querySelector("form")
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="contrasena"]');


// const btn = document.querySelector("#btn_validar");

//funciones

const validar = (event) => {
  event.preventDefault();
  if (nombre.value =="") {
    alert("llenar el campo nombre")
    nombre.focus();
  }
  if (apellido.value =="") {
    alert("llenar el campo apellido")
    apellido.focus();
  }
  if (telefono.value =="") {
    alert("llenar el campo telefono")
    telefono.focus();
  }
  if (documento.value =="") {
    alert("llenar el campo documento")
   documento.focus();
  }
  if (usuario.value =="") {
    alert("llenar el campo usuario ")
    usuario.focus();
  }
  if (contrasena.value =="") {
    alert("llenar el campo contraseña ")
    nombre.focus();
  }
}
// Eventos
formulario.addEventListener("submit",validar);