import { promesaTemplate } from "./promesa.template.js";
import { icon } from "../../shared/ui/icons.js";

const promesas = [
  {
    t: "Jehová es mi pastor; nada me faltará.",
    r: "Salmos 23:1",
    e: "Dios cuida de ti personalmente. No es un Dios lejano, es tu Pastor que provee paz, dirección y sustento.",
  },
  {
    t: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",
    r: "Jeremías 29:11",
    e: "Tu futuro no es un accidente. Dios tiene un diseño lleno de esperanza y bienestar para tu vida.",
  },
  {
    t: "Todo lo puedo en Cristo que me fortalece.",
    r: "Filipenses 4:13",
    e: "No se trata de tu capacidad humana, sino del poder sobrenatural de Cristo actuando a través de tu debilidad.",
  },
  {
    t: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",
    r: "Josué 1:9",
    e: "La valentía bíblica no es la ausencia de miedo, es la certeza de que Dios camina contigo en cada paso.",
  },
  {
    t: "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
    r: "1 Pedro 5:7",
    e: "Dios te invita a soltar esa carga pesada. Él es lo suficientemente fuerte para llevar tus problemas.",
  },
  {
    t: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas.",
    r: "Jeremías 33:3",
    e: "La oración es la línea directa al cielo. Dios tiene respuestas que aún no imaginas, solo espera tu llamada.",
  },
];

export function initPromesa(container) {
  container.insertAdjacentHTML("beforeend", promesaTemplate());

  const btn = document.getElementById("promesa-btn");

  btn.addEventListener("click", () => {
    // Animar ícono de refresh
    const btnIcon = btn.querySelector(".promesa__btn-icon");
    if (btnIcon) btnIcon.classList.add("animate-spin");

    setTimeout(() => {
      const random = promesas[Math.floor(Math.random() * promesas.length)];
      const display = document.getElementById("verse-display");

      display.style.opacity = "0";

      setTimeout(() => {
        display.innerHTML = `
          <p class="promesa__verse-text animate-fade-in">"${random.t}"</p>
          <p class="promesa__verse-ref">${random.r}</p>
          <div class="promesa__explanation animate-slide-up">
            <div class="promesa__explanation-inner">
              ${icon("sparkles", 20, "promesa__sparkle-icon")}
              <p class="promesa__explanation-text">${random.e}</p>
            </div>
          </div>
        `;
        display.style.opacity = "1";

        // Detener animación del ícono
        const newBtnIcon = btn.querySelector(".promesa__btn-icon");
        if (newBtnIcon) newBtnIcon.classList.remove("animate-spin");
      }, 300);
    }, 500);
  });
}
