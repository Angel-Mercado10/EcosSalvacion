import { navbarTemplate } from "./navbar.template.js";

export function initNavbar(container) {
  container.insertAdjacentHTML("beforeend", navbarTemplate());

  const navbar = document.getElementById("navbar");
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  function updateNavbarState() {
    if (window.scrollY > 24) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  }

  updateNavbarState();
  window.addEventListener("scroll", updateNavbarState, { passive: true });

  btn.addEventListener("click", () => {
    const isHidden = menu.classList.contains("navbar__mobile-menu--hidden");

    if (isHidden) {
      menu.classList.remove("navbar__mobile-menu--hidden");
      menu.style.animation = "slideDown 0.3s ease forwards";
    } else {
      menu.classList.add("navbar__mobile-menu--hidden");
      menu.style.animation = "";
    }
  });

  // Cerrar menú al hacer clic en un enlace
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("navbar__mobile-menu--hidden");
      menu.style.animation = "";
    });
  });
}
