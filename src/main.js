import { initNavbar } from "./features/navbar/navbar.logic.js";
import { initHero } from "./features/hero/hero.logic.js";
import { initPromesa } from "./features/promesa/promesa.logic.js";
import { initProgramas } from "./features/programas/programas.logic.js";
import { initComunidad } from "./features/comunidad/comunidad.logic.js";
import { initContacto } from "./features/contacto/contacto.logic.js";
import { initModal } from "./features/modal/modal.logic.js";
import { initVideo } from "./features/video/video.logic.js";
import { initReveal } from "./shared/ui/reveal.js";
import { initFirebase } from "./shared/firebase/firebase.client.js";

const app = document.getElementById("app");

function renderFooter() {
  const footer = `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__logo">
          <img src="IMG_0628.JPG" alt="Logo mini" class="footer__logo-img"
            onerror="this.src='https://placehold.co/20x20/333/FFF?text=I'">
        </div>
        <p class="footer__copy">&copy; <span id="year"></span> ICEM Coacalco | Ecos de Salvación</p>
        <p class="footer__note">
          Hecho con excelencia para la Gloria de Dios.<br>
          Todas las peticiones y preguntas son tratadas con estricta confidencialidad.
        </p>
      </div>
    </footer>
  `;
  app.insertAdjacentHTML("beforeend", footer);
  document.getElementById("year").textContent = new Date().getFullYear();
}

async function bootstrap() {
  // 1. Renderizar todas las secciones
  initNavbar(app);
  initHero(app);
  initPromesa(app);
  initProgramas(app);
  initComunidad(app);
  initContacto(app);
  renderFooter();
  initModal(app);

  // 2. Inicializar Firebase
  await initFirebase();

  // 3. Auto-cargar último video de YouTube
  initVideo();

  // 4. Activar scroll reveal
  setTimeout(() => initReveal(), 100);
}

bootstrap();
