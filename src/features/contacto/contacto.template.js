import { icon } from "../../shared/ui/icons.js";

export function contactoTemplate() {
  return `
    <section id="contacto" class="contacto">
      <div class="contacto__container reveal">
        <div class="contacto__card">

          <!-- Columna izquierda: Info -->
          <div class="contacto__info">
            <div class="contacto__info-header">
              <span class="contacto__label">Ubicación</span>
              <h2 class="contacto__title">Tu Casa en Coacalco</h2>
              <p class="contacto__intro">
                No somos solo un edificio, somos una familia. Ven y forma parte de lo que Dios está haciendo en nuestra ciudad.
              </p>
            </div>

            <div class="contacto__details">
              <!-- Dirección -->
              <div class="contacto__detail-item">
                <div class="contacto__detail-icon">
                  ${icon("map-pin", 24)}
                </div>
                <div>
                  <h4 class="contacto__detail-title">Dirección</h4>
                  <p class="contacto__detail-text">
                   Boulevard Bosque Central, esquina Caobas. Fracc. Bosques del Valle, 1a. Sección. Coacalco, Estado de México.
                  </p>
                </div>
              </div>

              <!-- Horario -->
              <div class="contacto__detail-item">
                <div class="contacto__detail-icon">
                  ${icon("clock", 24)}
                </div>
                <div>
                  <h4 class="contacto__detail-title">Reunión Principal</h4>
                  <p class="contacto__detail-text contacto__detail-text--bold">
                    Domingos: Predicación y Alabanza 12:00 pm
                  </p>
                </div>
              </div>

              <!-- Web -->
              <div class="contacto__detail-item">
                <div class="contacto__detail-icon">
                  ${icon("globe", 24)}
                </div>
                <div>
                  <h4 class="contacto__detail-title">Sitio Web Oficial</h4>
                  <a href="https://www.iglesiaicem.org/coacalco.php#" target="_blank" class="contacto__web-link">
                    www.iglesiaicem.org/coacalco.php
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna derecha: Mapa -->
          <div class="contacto__map-wrapper">
            <div class="contacto__map-overlay"></div>
            <iframe class="contacto__map"
              frameborder="0" style="border:0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.833512660391!2d-99.12385972473515!3d19.63441423420481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f414a0ee6e9b%3A0x5439f034bba4b75!2sIglesia%20Cristiana%20Evangelica%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1765428498566!5m2!1ses!2smx"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </div>
    </section>
  `;
}
