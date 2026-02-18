import { modalTemplate } from "./modal.template.js";
import { on } from "../../shared/core/events.js";
import { icon } from "../../shared/ui/icons.js";

export function initModal(container) {
  container.insertAdjacentHTML("beforeend", modalTemplate());

  const modal = document.getElementById("custom-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  function showModal({ title, message, iconName = "check" }) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-msg").textContent = message;

    const iconWrapper = document.getElementById("modal-icon-wrapper");
    if (iconWrapper) iconWrapper.innerHTML = icon(iconName, 40);

    modal.classList.remove("modal--hidden");
    // Forzar reflow para la animación
    void modal.offsetWidth;
    modal.classList.add("modal--visible");
  }

  function closeModal() {
    modal.classList.remove("modal--visible");
    setTimeout(() => modal.classList.add("modal--hidden"), 300);
  }

  closeBtn.addEventListener("click", closeModal);

  // Cerrar haciendo clic en el backdrop
  modal.querySelector(".modal__backdrop").addEventListener("click", closeModal);

  // Escuchar eventos del bus
  on("modal:open", (data) => showModal(data));
  on("modal:close", closeModal);
}
