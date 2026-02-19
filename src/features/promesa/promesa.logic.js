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
  {
    t: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
    r: "Isaías 41:10",
    e: "Dios es tu fuente de seguridad. Su presencia elimina el temor y su mano derecha es la garantía de que no caerás.",
  },
  {
    t: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",
    r: "Salmos 91:1",
    e: "La protección divina es para quien decide permanecer cerca de Dios. Vivir bajo su cuidado es el refugio más seguro.",
  },
  {
    t: "Estad quietos, y conoced que yo soy Dios; seré exaltado entre las naciones; enaltecido seré en la tierra.",
    r: "Salmos 46:10",
    e: "A veces el mayor esfuerzo es soltar el control y dejar que Dios demuestre que Él tiene el mando absoluto de todo.",
  },
  {
    t: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
    r: "Mateo 11:28",
    e: "Jesús ofrece un alivio real para el agotamiento mental y espiritual. El descanso verdadero se encuentra en Su persona.",
  },
  {
    t: "Encomienda a Jehová tu camino, y confía en él; y él hará.",
    r: "Salmos 37:5",
    e: "Poner tus planes en las manos de Dios y confiar plenamente libera la bendición para que las cosas sucedan conforme a Su voluntad.",
  },
  {
    t: "El nombre de Jehová es torre fuerte; a ella correrá el justo, y levantado será.",
    r: "Proverbios 18:10",
    e: "Dios es un lugar de protección inmediata. Cuando las dificultades arrecian, Su carácter es el refugio donde estarás a salvo.",
  },
  {
    t: "Mas el que hubiere permanecido hasta el fin, éste será salvo.",
    r: "Mateo 24:13",
    e: "La perseverancia es clave en la fe. No se trata solo de empezar bien, sino de mantener la firmeza hasta el último momento.",
  },
  {
    t: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
    r: "Romanos 8:28",
    e: "Incluso lo que parece malo o difícil, Dios lo utiliza para construir algo bueno en la vida de quienes le aman.",
  },
  {
    t: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",
    r: "Mateo 7:7",
    e: "La insistencia en la oración muestra fe. Dios responde a la persistencia de un corazón que reconoce su necesidad de Él.",
  },
  {
    t: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
    r: "Salmos 27:1",
    e: "Cuando Dios ilumina tu camino y sostiene tu vida, cualquier amenaza externa pierde su poder para intimidarte.",
  },
  {
    t: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
    r: "Salmos 119:105",
    e: "La Biblia no es solo teoría, es la guía práctica que te muestra dónde pisar hoy y hacia dónde ir mañana.",
  },
  {
    t: "Bienaventurado el varón que soporta la tentación; porque cuando haya resistido la prueba, recibirá la corona de vida, que Dios ha prometido a los que le aman.",
    r: "Santiago 1:12",
    e: "Resistir bajo presión tiene una recompensa eterna. La prueba es el camino hacia la madurez y la bendición prometida.",
  },
  {
    t: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.",
    r: "2 Timoteo 1:7",
    e: "El miedo no viene de Dios. Él te ha equipado con fuerza interior y la capacidad de gobernar tus emociones.",
  },
  {
    t: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.",
    r: "Proverbios 3:5",
    e: "Tu inteligencia es limitada, pero la sabiduría de Dios no. Confiar en Él implica soltar tus propios razonamientos.",
  },
  {
    t: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.",
    r: "Juan 14:27",
    e: "La paz de Cristo es sobrenatural y estable, no depende de que las circunstancias externas estén en calma.",
  },
  {
    t: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.",
    r: "Filipenses 4:6",
    e: "La ansiedad se combate con oración y gratitud. Presentar tus cargas a Dios es el remedio para la preocupación.",
  },
  {
    t: "Si Dios es por nosotros, ¿quién contra nosotros?",
    r: "Romanos 8:31",
    e: "Tener el respaldo del Creador del universo hace que cualquier oposición sea irrelevante en comparación con Su poder.",
  },
  {
    t: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros.",
    r: "Santiago 4:7",
    e: "La victoria espiritual requiere primero rendición total a Dios. La resistencia firme hace retroceder al enemigo.",
  },
  {
    t: "Mas el Dios de toda gracia, que nos llamó a su gloria eterna en Jesucristo, después que hayáis padecido un poco de tiempo, él mismo os perfeccione, afirme, fortalezca y establezca.",
    r: "1 Pedro 5:10",
    e: "El sufrimiento es temporal, pero el proceso de Dios en ti busca dejarte firme, fuerte e inamovible.",
  },
  {
    t: "El que tiene mis mandamientos, y los guarda, ése es el que me ama; y el que me ama, será amado por mi Padre, y yo le amaré, y me manifestaré a él.",
    r: "Juan 14:21",
    e: "El amor a Dios se demuestra con obediencia. La recompensa es una relación profunda y la revelación personal de Jesús.",
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
