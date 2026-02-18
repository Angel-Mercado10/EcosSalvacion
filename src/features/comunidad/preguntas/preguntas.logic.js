import { preguntasTemplate } from "./preguntas.template.js";
import { icon } from "../../../shared/ui/icons.js";
import { emit } from "../../../shared/core/events.js";
import {
  getDb,
  getUserId,
  isReady,
  getAppId,
  addDoc,
  collection,
} from "../../../shared/firebase/firebase.client.js";

export function initPreguntas(container) {
  container.insertAdjacentHTML("beforeend", preguntasTemplate());

  const btn = document.getElementById("submit-pregunta");
  const textarea = document.getElementById("pregunta-texto");

  btn.addEventListener("click", async () => {
    if (!isReady()) {
      return emit("modal:open", {
        title: "Conectando...",
        message: "Espera un momento.",
        iconName: "loader",
      });
    }

    const texto = textarea.value.trim();

    if (texto.length < 5) {
      return emit("modal:open", {
        title: "Atención",
        message: "Escribe tu pregunta o tema sugerido.",
        iconName: "help-circle",
      });
    }

    const originalHTML = btn.innerHTML;
    btn.innerHTML = `${icon("loader", 20, "animate-spin")} Enviando...`;
    btn.disabled = true;

    try {
      await addDoc(
        collection(getDb(), `artifacts/${getAppId()}/public/data/preguntas`),
        {
          texto,
          tipo: "pregunta_programa",
          fecha: Date.now(),
          userId: getUserId(),
        }
      );

      textarea.value = "";
      emit("modal:open", {
        title: "¡Pregunta Enviada!",
        message:
          "Gracias por participar. Estaremos revisando tu pregunta para los próximos episodios.",
        iconName: "message-circle",
      });
    } catch (e) {
      console.error(e);
      emit("modal:open", {
        title: "Error",
        message: "No se pudo enviar. Intenta de nuevo.",
        iconName: "x-circle",
      });
    } finally {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
    }
  });
}
