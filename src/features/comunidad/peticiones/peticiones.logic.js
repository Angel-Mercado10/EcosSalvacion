import { peticionesTemplate } from "./peticiones.template.js";
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

export function initPeticiones(container) {
  container.insertAdjacentHTML("beforeend", peticionesTemplate());

  const btn = document.getElementById("submit-peticion");
  const textarea = document.getElementById("peticion-texto");

  btn.addEventListener("click", async () => {
    if (!isReady()) {
      return emit("modal:open", {
        title: "Conectando...",
        message: "Espera un momento, estamos conectando con el servidor.",
        iconName: "loader",
      });
    }

    const texto = textarea.value.trim();

    if (texto.length < 5) {
      return emit("modal:open", {
        title: "Atención",
        message: "Por favor escribe tu petición completa para poder orar mejor por ti.",
        iconName: "alert-circle",
      });
    }

    const originalHTML = btn.innerHTML;
    btn.innerHTML = `${icon("loader", 20, "animate-spin")} Enviando...`;
    btn.disabled = true;

    try {
      await addDoc(
        collection(getDb(), `artifacts/${getAppId()}/public/data/peticiones`),
        {
          texto,
          publico: false,
          tipo: "oracion",
          fecha: Date.now(),
          userId: getUserId(),
        }
      );

      textarea.value = "";
      emit("modal:open", {
        title: "¡Recibido!",
        message:
          "Tu petición ha sido recibida en nuestro buzón confidencial. El equipo de intercesión orará por ti.",
        iconName: "check",
      });
    } catch (e) {
      console.error(e);
      emit("modal:open", {
        title: "Error",
        message: "No se pudo enviar. Por favor revisa tu conexión a internet.",
        iconName: "x-circle",
      });
    } finally {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
    }
  });
}
