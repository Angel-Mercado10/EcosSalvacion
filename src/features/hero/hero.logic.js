import { heroTemplate } from "./hero.template.js";

export function initHero(container) {
  container.insertAdjacentHTML("beforeend", heroTemplate());
}
