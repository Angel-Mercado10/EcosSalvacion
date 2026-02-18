import { icon } from "../../shared/ui/icons.js";

export function navbarTemplate() {
  return `
    <nav class="navbar" id="navbar">
      <div class="navbar__container">
        <div class="navbar__inner">

          <!-- Logo -->
          <a href="#inicio" class="navbar__brand">
            <div class="navbar__logo-circle">
              <img src="IMG_0628.JPG" alt="Logo ICEM" class="navbar__logo-img"
                onerror="this.src='https://placehold.co/40x40/0A386C/FFFFFF?text=ICEM'">
            </div>
            <div class="navbar__brand-text">
              <span class="navbar__title">ICEM</span>
              <span class="navbar__subtitle">Ecos de Salvación</span>
            </div>
          </a>

          <!-- Menú Desktop -->
          <div class="navbar__links">
            <a href="#inicio" class="navbar__link">Inicio</a>
            <a href="#promesa" class="navbar__link">Promesa</a>
            <a href="#programas" class="navbar__link">Programas</a>
            <a href="#comunidad" class="navbar__link navbar__link--pill">Participa</a>
            <a href="#contacto" class="navbar__link">Visítanos</a>
          </div>

          <!-- Botón Menú Móvil -->
          <button class="navbar__toggle" id="mobile-menu-btn" aria-label="Menú">
            ${icon("menu", 24)}
          </button>
        </div>
      </div>

      <!-- Menú Móvil -->
      <div class="navbar__mobile-menu navbar__mobile-menu--hidden" id="mobile-menu">
        <div class="navbar__mobile-links">
          <a href="#inicio" class="navbar__mobile-link">Inicio</a>
          <a href="#promesa" class="navbar__mobile-link">Promesa Diaria</a>
          <a href="#programas" class="navbar__mobile-link">Programas</a>
          <a href="#comunidad" class="navbar__mobile-link">Oración y Preguntas</a>
          <a href="#contacto" class="navbar__mobile-link">Contacto</a>
        </div>
      </div>
    </nav>
  `;
}
