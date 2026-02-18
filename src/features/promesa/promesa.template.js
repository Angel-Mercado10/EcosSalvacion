import { icon } from "../../shared/ui/icons.js";

export function promesaTemplate() {
  return `
    <section id="promesa" class="promesa">
      <!-- Línea decorativa superior -->
      <div class="promesa__divider-top"></div>

      <div class="promesa__container reveal">
        <div class="promesa__header">
          <div class="promesa__icon-wrapper">
            ${icon("book-open", 32, "promesa__header-icon")}
          </div>
          <h2 class="promesa__title">Promesa al Instante</h2>
          <p class="promesa__subtitle">
            A veces solo necesitamos una palabra certera en el momento justo. Recíbela hoy.
          </p>
        </div>

        <div class="promesa__card">
          <!-- Decoración esquina -->
          <div class="promesa__card-deco"></div>

          <div class="promesa__verse-display" id="verse-display">
            <p class="promesa__verse-text">
              "Haz clic para recibir una palabra de Dios para tu vida hoy."
            </p>
            <p class="promesa__verse-ref">Reina Valera 1960</p>

            <div class="promesa__explanation" id="verse-explanation" style="display:none;">
              <div class="promesa__explanation-inner">
                ${icon("sparkles", 20, "promesa__sparkle-icon")}
                <p class="promesa__explanation-text" id="explanation-text"></p>
              </div>
            </div>
          </div>

          <button class="promesa__btn" id="promesa-btn">
            ${icon("refresh-cw", 16, "promesa__btn-icon")} Nueva Promesa
          </button>
        </div>
      </div>
    </section>
  `;
}
