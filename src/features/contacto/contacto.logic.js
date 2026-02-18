import { contactoTemplate } from "./contacto.template.js";

export function initContacto(container) {
  container.insertAdjacentHTML("beforeend", contactoTemplate());
}
