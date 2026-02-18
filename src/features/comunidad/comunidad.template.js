export function comunidadTemplate() {
  return `
    <section id="comunidad" class="comunidad">
      <!-- Background shapes -->
      <div class="comunidad__bg-shapes">
        <div class="comunidad__shape comunidad__shape--blue"></div>
        <div class="comunidad__shape comunidad__shape--purple"></div>
      </div>

      <div class="comunidad__container">
        <!-- Header -->
        <div class="comunidad__header reveal">
          <span class="comunidad__label">Tu espacio seguro</span>
          <h2 class="comunidad__title">Participa con Nosotros</h2>
          <p class="comunidad__subtitle">
            Queremos escucharte. Todo lo que envíes aquí llega de forma privada y directa a nuestro equipo.
          </p>
        </div>

        <div class="comunidad__grid">
          <!-- Peticiones (columna izquierda) -->
          <div id="peticiones-container" class="reveal"></div>

          <!-- Preguntas (columna derecha) -->
          <div id="preguntas-container" class="reveal"></div>
        </div>
      </div>
    </section>
  `;
}
