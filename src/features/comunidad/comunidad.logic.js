import { comunidadTemplate } from "./comunidad.template.js";
import { initPeticiones } from "./peticiones/peticiones.logic.js";
import { initPreguntas } from "./preguntas/preguntas.logic.js";

export function initComunidad(container) {
  container.insertAdjacentHTML("beforeend", comunidadTemplate());

  const peticionesContainer = document.getElementById("peticiones-container");
  const preguntasContainer = document.getElementById("preguntas-container");

  initPeticiones(peticionesContainer);
  initPreguntas(preguntasContainer);
}
