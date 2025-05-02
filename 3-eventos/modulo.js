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
  // creamos un objeto vacio , donde se alamcenara los campos del formulario 
  const person = {};
  //todos lo que sean requeridos
  // 
  const campos = [...e.target].filter((hijos) => {
    return hijos.hasAttribute("required")
  });
  // radios
  const radio = [...campos].filter((elementos) => {
    return elementos.type === "radio";
  });
  //campo radio la cual buscamos el valor con la funcion find si esta chequieado   el campo 
  const campo__radio = radio.find((radio) => radio.checked) || [];
  //
  if (campo__radio.length == 0) { person[radio[0].name] = "" }
  else {
    person[campo__radio.name] = campo__radio.value;
  }
  // validamos que se tipo checkbox
  const checkbox = [...campos].filter((elemento) => elemento.type == "checkbox");
  //
  const campo__checkbox = checkbox.filter((e) => e.checked)
  // 
  if (campo__checkbox.length < 3) {
    person[[0].name] == "";
  }
  else {
    person[checkbox[0].name] = [...campo__checkbox].map(e => e.value);
    
    
  }

  campos.forEach((campo) => {
    // console.log(campo.tagName);
    
    switch (campo.tagName) {
      case "INPUT" :
        if (campo.value == "") {
          campo.classList.add("input__border");
          let span = document.createElement("span")
          span.classList.add("span")
          span.textContent = "llenar campo vacio ";
          campo.insertAdjacentElement("afterend",span)
        }
        else {
          person[campo.name] = campo.value;
        }
        break;
      case "SELECT":
        if (campo.selectedIndex == 0) {
          campo.classList.add("input__border")
          let span = document.createElement("span")
          span.classList.add("span")
          span.textContent = "llenar campo vacio ";
          campo.insertAdjacentElement("afterend",span)
        }
         else {
          person[campo.name] = campo.selectedIndex;
        }
  
      default:
        break;
      
    }
   
    
  });
  return person;
  
  
  
}


// if (campo.value == "" ) {
//   campo.classList.add("input__border");
  
  
// }
// if (campo.type("SELECT")) {
   
// }

// console.log(campo.selectedIndex);