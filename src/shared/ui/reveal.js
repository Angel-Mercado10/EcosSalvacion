/**
 * Scroll Reveal – anima elementos al entrar en el viewport.
 * Usa la clase CSS .reveal / .reveal.active definida en animations.css.
 */

export function initReveal() {
  function reveal() {
    const elements = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal(); // primera ejecución inmediata
}
