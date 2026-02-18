import { icon } from "../../../shared/ui/icons.js";

export function peticionesTemplate() {
  return `
    <div class="peticiones">
      <div class="peticiones__header">
        <div class="peticiones__icon-wrapper">
          ${icon("heart", 32, "peticiones__icon")}
        </div>
        <div>
          <h3 class="peticiones__title">Peticiones de Oración</h3>
          <p class="peticiones__badge">Confidencial</p>
        </div>
      </div>

      <p class="peticiones__desc">
        No estás solo en tus luchas. Envíanos tu carga y nuestro equipo pastoral orará por ti en privado.
        <strong>Dios escucha.</strong>
      </p>

      <div class="peticiones__form">
        <div class="peticiones__textarea-wrapper">
          <textarea id="peticion-texto" class="peticiones__textarea" rows="5"
            placeholder="Escribe aquí tu petición..."></textarea>
          <div class="peticiones__textarea-badge">
            ${icon("lock", 12)} Privado
          </div>
        </div>

        <button class="peticiones__btn" id="submit-peticion">
          <span>Enviar Petición</span>
          ${icon("send", 16, "peticiones__btn-icon")}
        </button>
      </div>
    </div>
  `;
}
