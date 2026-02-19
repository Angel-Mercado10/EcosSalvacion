import { peticionesTemplate } from "./peticiones.template.js";
import { emit } from "../../../shared/core/events.js";

const EMAIL = "angel.yael.m@live.com";

export function initPeticiones(container) {
  container.insertAdjacentHTML("beforeend", peticionesTemplate());

  const btn = document.getElementById("submit-peticion");
  const textarea = document.getElementById("peticion-texto");

  btn.addEventListener("click", () => {
    const texto = textarea.value.trim();

    if (texto.length < 5) {
      return emit("modal:open", {
        title: "Atención",
        message: "Por favor escribe tu petición completa para poder orar mejor por ti.",
        iconName: "alert-circle",
      });
    }

    const subject = encodeURIComponent("Peticion de oracion");
    const body = encodeURIComponent(texto);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_self");

    textarea.value = "";
    emit("modal:open", {
      title: "¡Gracias!",
      message:
        "Se abrirá tu aplicación de correo para enviar la petición. El equipo de intercesión orará por ti.",
      iconName: "check",
    });
  });
}
