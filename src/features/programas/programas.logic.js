import { programasTemplate } from "./programas.template.js";

export function initProgramas(container) {
  container.insertAdjacentHTML("beforeend", programasTemplate());
}
