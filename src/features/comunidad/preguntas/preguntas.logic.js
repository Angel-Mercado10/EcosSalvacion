import { preguntasTemplate } from "./preguntas.template.js";
import { emit } from "../../../shared/core/events.js";

const EMAIL = "angel.yael.m@live.com";

export function initPreguntas(container) {
  container.insertAdjacentHTML("beforeend", preguntasTemplate());

  const btn = document.getElementById("submit-pregunta");
  const textarea = document.getElementById("pregunta-texto");

  btn.addEventListener("click", () => {
    const texto = textarea.value.trim();

    if (texto.length < 5) {
      return emit("modal:open", {
        title: "Atención",
        message: "Escribe tu pregunta o tema sugerido.",
        iconName: "help-circle",
      });
    }

    const subject = encodeURIComponent("Pregunta");
    const body = encodeURIComponent(texto);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_self");

    textarea.value = "";
    emit("modal:open", {
      title: "¡Pregunta Lista!",
      message:
        "Se abrirá tu aplicación de correo para enviar la pregunta. Estaremos revisándola para los próximos episodios.",
      iconName: "message-circle",
    });
  });
}
