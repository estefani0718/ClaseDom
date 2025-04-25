// export const validarCamporVacios = (event) => {
//  event.preventDefault();
//   if (nombre.value == "") {
//     if (nombre.nextElementSibling) {
//       nombre.nextElementSibling.remove()
//     }
//     nombre.classList.add("input__border")
//     let span = document.createElement("span")
//     span.classList.add("span")
//     span.textContent = "llenar campo vacio ";
//     nombre.insertAdjacentElement("afterend",span)
//     alert("llenar el campo nombre");
//     nombre.focus();
//   }
//   if (apellido.value == "") {
//      if (apellido.nextElementSibling) {
//        apellido.nextElementSibling.remove()
//     }
//     alert("llenar el campo apellido")
//     apellido.classList.add("input__border")
//     let span = document.createElement("span")
//     span.classList.add("span")
//     span.textContent = "llenar campo vacio ";
//     apellido.insertAdjacentElement("afterend",span)
//     apellido.focus();
//   }
//   if (telefono.value == "") {

//     if (telefono.nextElementSibling) {
//       telefono.nextElementSibling.remove()
//     }
//     alert("llenar el campo telefono")
//     telefono.classList.add("input__border")
//     let span = document.createElement("span")
//     span.classList.add("span")
//     span.textContent = "llenar campo vacio ";
//     telefono.insertAdjacentElement("afterend", span);
//     telefono.focus();
//   }
//   if (documento.value == "") {
//      if (documento.nextElementSibling) {
//       documento.nextElementSibling.remove()
//     }
//     alert("llenar el campo documento")
//     documento.classList.add("input__border")
//     let span = document.createElement("span")
//     span.classList.add("span")
//     span.textContent = "llenar campo vacio ";
//     documento.insertAdjacentElement("afterend",span)
//     documento.focus();
//   }
//   if (usuario.value == "") {
//      if (usuario.nextElementSibling) {
//       usuario.nextElementSibling.remove()
//     }
//     alert("llenar el campo usuario ")
//     usuario.classList.add("input__border")
//     let span = document.createElement("span")
//     span.classList.add("span")
//     span.textContent = "llenar campo vacio ";
//     usuario.insertAdjacentElement("afterend",span)
//     usuario.focus();
//   }
//   if (contrasena.value == "") {
//      if (contrasena.nextElementSibling) {
//       contrasena.nextElementSibling.remove()
//     }
//     alert("llenar el campo contraseña ")
//     usuario.classList.add("input__border")
//     let span = document.createElement("span")
//     span.classList.add("span")
//     span.textContent = "llenar campo vacio ";
//     contrasena.insertAdjacentElement("afterend",span)
//     contrasena.focus();
    
//   }
// }

export const validar = (e) => {
  e.preventDefault();
  
 //  let hijos=e.target.children
 //todos lo que sean requeridos
  const campos = [...e.target].filter((hijos) => {
    return hijos.hasAttribute("required")
  })
  campos.forEach((campo) => {
    console.log(campo.tagName);
    
      switch (campo.tagName) {
        case "INPUT":

          console.log(campo.type);
          
          break;
        case "select":
         console.log(campo.type);
        default:
          break;
      }
    console.log(campo);
    if (campo.value == "") {
      campo.classList.add("input__border");
      let span = document.createElement("span")
      span.classList.add("span")
      span.textContent = "llenar campo vacio ";
      campo.insertAdjacentElement("afterend",span)
    }
    console.log(campo.selectedIndex);
    
   })
  
   

 
}