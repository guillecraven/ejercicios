import { messages } from "./messages.js";
const mensajesRecibidos = [];

const enviarInfo = (e) => {
  const message = document.getElementById("message");
  message.textContent = "";
  e.preventDefault();
  const motivo = document.getElementById("motivo").value;
  const mensajeDelUsuario = document.getElementById("mensajeDeContac").value;
  if (mensajeDelUsuario === "" || motivo === "") {
    message.textContent = messages.camposVacios;
  } else {
    const motivoToJson = JSON.stringify(motivo);
    const msjToJson = JSON.stringify(mensajeDelUsuario);
    localStorage.setItem("motivo", motivoToJson);
    localStorage.setItem("mensaje", msjToJson);
    window.location.href = "./index2.html";
  }
  mensajesRecibidos.push(motivo, mensajeDelUsuario);
  console.log(mensajesRecibidos);
  console.log(mensajeDelUsuario);
};
const form = document.getElementById("formContacto");
form.addEventListener("submit", enviarInfo, false);
console.log('lalaal')
