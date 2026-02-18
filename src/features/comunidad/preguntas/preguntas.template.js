import { icon } from "../../../shared/ui/icons.js";

export function preguntasTemplate() {
  return `
    <div class="preguntas">
      <!-- Decoración -->
      <div class="preguntas__deco preguntas__deco--top"></div>
      <div class="preguntas__deco preguntas__deco--bottom"></div>

      <div class="preguntas__content">
        <div class="preguntas__header">
          <div class="preguntas__icon-wrapper">
            ${icon("help-circle", 32, "preguntas__icon")}
          </div>
          <div>
            <h3 class="preguntas__title">Buzón de Preguntas</h3>
            <p class="preguntas__badge">Para el Programa</p>
          </div>
        </div>

        <p class="preguntas__desc">
          ¿Tienes dudas bíblicas? ¿Algún tema que te gustaría que tratemos en "Ecos de Salvación"?
          Escríbenos aquí. <strong>Tus preguntas enriquecen el programa.</strong>
        </p>

        <div class="preguntas__form">
          <div class="preguntas__textarea-wrapper">
            <textarea id="pregunta-texto" class="preguntas__textarea" rows="5"
              placeholder="¿Cuál es tu duda o tema sugerido?"></textarea>
            <div class="preguntas__textarea-badge">
              ${icon("shield", 12)} Anónimo
            </div>
          </div>

          <button class="preguntas__btn" id="submit-pregunta">
            <span>Enviar Pregunta</span>
            ${icon("arrow-right", 16, "preguntas__btn-icon")}
          </button>
        </div>
      </div>
    </div>
  `;
}
