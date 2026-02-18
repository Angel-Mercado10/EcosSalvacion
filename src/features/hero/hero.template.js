import { icon } from "../../shared/ui/icons.js";

export function heroTemplate() {
  return `
    <section id="inicio" class="hero">
      <!-- Fondo con overlay -->
      <div class="hero__bg">
        <div class="hero__overlay"></div>
        <img src="40580.jpg" alt="Fondo ICEM" class="hero__bg-img animate-pulse-bg"
          onerror="this.src='https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'">
      </div>

      <!-- Contenido -->
      <div class="hero__content reveal active">
        <div class="hero__badge animate-fade-in">
          <span class="hero__badge-dot animate-dot-pulse"></span>
          Iglesia Cristiana Evangélica México
        </div>

        <h1 class="hero__title">
          Ecos de <span class="hero__title-accent">Salvación</span>
        </h1>

        <p class="hero__description">
          Un espacio digital diseñado para edificar tu fe, conectar con la comunidad y profundizar en la Palabra de Dios.
        </p>

        <div class="hero__actions">
          <a href="#programas" class="hero__btn hero__btn--primary">
            ${icon("play-circle", 20, "hero__btn-icon")} Ver Programas
          </a>
          <a href="#comunidad" class="hero__btn hero__btn--outline">
            ${icon("message-circle", 20, "hero__btn-icon")} Participar
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hero__scroll animate-bounce">
        ${icon("chevron-down", 32)}
      </div>
    </section>
  `;
}
