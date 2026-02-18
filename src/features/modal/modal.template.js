import { icon } from "../../shared/ui/icons.js";

export function modalTemplate() {
  return `
    <div class="modal modal--hidden" id="custom-modal">
      <div class="modal__backdrop"></div>
      <div class="modal__dialog">
        <div class="modal__accent-bar"></div>
        <div class="modal__body">
          <div class="modal__icon-wrapper" id="modal-icon-wrapper">
            ${icon("check", 40)}
          </div>
          <h3 class="modal__title" id="modal-title">Título</h3>
          <p class="modal__msg" id="modal-msg">Mensaje</p>
          <button class="modal__btn" id="modal-close-btn">Entendido</button>
        </div>
      </div>
    </div>
  `;
}
