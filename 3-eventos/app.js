import { validar } from "./modulos/modulo.js";
//validarCamporVacios,
// variables
const formulario = document.querySelector("form")
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="Telefono"]');
const documento = document.querySelector('[name="Documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="contrasena"]');
const pol = document.querySelector("#politicas");
const boton = document.querySelector("btn_validar");

// const btn = document.querySelector("#btn_validar");

//funciones


// Eventos
formulario.addEventListener("submit", Isvalid);
formulario
nombre.addEventListener("blur", campo);
apellido.addEventListener("blur", campo);
telefono.addEventListener("blur", campo);
documento.addEventListener("blur", campo);

nombre.addEventListener("keydown", validarText);
apellido.addEventListener("keydown", validarText);
telefono.addEventListener("keydown", validarNum);
documento.addEventListener("keydown", validarNum);
usuario.addEventListener("keydown",validarText);
contrasena.addEventListener("keydown",validarContaseña);

// addEventListener("DOMContentLoaded", politicas);
pol.addEventListener("change",politicas)
