import { icon } from "../../shared/ui/icons.js";
import { videoPlayerTemplate } from "../video/video.template.js";

export function programasTemplate() {
  return `
    <section id="programas" class="programas">
      <div class="programas__container">

        <!-- Header -->
        <div class="programas__header reveal">
          <div class="programas__header-left">
            <span class="programas__label">Contenido Digital</span>
            <h2 class="programas__title">Nuestros Programas</h2>
          </div>
          <p class="programas__header-desc">
            Edificación constante para tu vida espiritual a través de mensajes y reflexiones.
          </p>
        </div>

        <div class="programas__grid">

          <!-- PROGRAMA 1: ECOS DE SALVACIÓN -->
          <div class="programas__card reveal">
            <div class="programas__card-outer">
              <div class="programas__card-inner">
                <!-- Video -->
                <div class="programas__media">
                  <div class="programas__media-gradient"></div>
                  ${videoPlayerTemplate()}
                </div>

                <!-- Info -->
                <div class="programas__info">
                  <div class="programas__info-bg-icon">
                    ${icon("mic-2", 128)}
                  </div>

                  <div class="programas__badges">
                    <span class="programas__badge programas__badge--live">En vivo</span>
                    <span class="programas__badge-meta">Podcast Semanal</span>
                  </div>

                  <h3 class="programas__name">Ecos de Salvación</h3>
                  <p class="programas__desc">
                    El programa insignia de ICEM. Análisis bíblico profundo, invitados especiales y temas relevantes para el creyente moderno.
                  </p>

                  <a href="https://www.youtube.com/@Ecos_de_Salvacion" target="_blank" class="programas__fallback-link">
                    ${icon("external-link", 12)} Si no reproduce, ver en YouTube
                  </a>

                  <a href="https://www.youtube.com/@Ecos_de_Salvacion" target="_blank" class="programas__episodes-link">
                    <span class="programas__episodes-text">Ver todos los episodios</span>
                    ${icon("arrow-up-right", 16, "programas__episodes-arrow")}
                  </a>
                </div>
              </div>
            </div>
          </div>

         <!-- 
PROGRAMA 2: REFLEXIONES DEL HOST

<div class="programas__card reveal">
  <div class="programas__card-outer">
    <div class="programas__card-inner programas__card-inner--reverse">
      <div class="programas__media programas__media--placeholder">
        <div class="programas__placeholder-overlay"></div>
        <img src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Estudio" class="programas__placeholder-img">

        <div class="programas__placeholder-content">
          <div class="programas__placeholder-avatar">
            ${icon("user", 40)}
          </div>
          <h4 class="programas__placeholder-title">Próximamente</h4>
          <p class="programas__placeholder-text">Una perspectiva más personal e íntima.</p>
        </div>
      </div>

      <div class="programas__info">
        <div class="programas__badges">
          <span class="programas__badge programas__badge--new">Nuevo</span>
        </div>

        <h3 class="programas__name">Reflexiones del Host</h3>
        <p class="programas__desc">
          Cápsulas breves y directas al corazón. Opiniones pastorales sobre el acontecer diario bajo la lupa de las Escrituras.
        </p>

        <button class="programas__coming-soon" disabled>
          ${icon("clock", 16)} Espéralo pronto
        </button>
      </div>
    </div>
  </div>
</div>

-->


        </div>
      </div>
    </section>
  `;
}
