// ========== 1. Datos ==========
const servicios = [
  { titulo: "Branding", icono: "fas fa-palette", descripcion: "Creamos identidades visuales únicas para tu marca." },
  { titulo: "Diseño Web", icono: "fas fa-laptop-code", descripcion: "Diseños modernos y adaptables a todo dispositivo." },
  { titulo: "Packaging", icono: "fas fa-box-open", descripcion: "Diseño de envases que captan la atención del cliente." },
  { titulo: "Redes Sociales", icono: "fas fa-share-alt", descripcion: "Contenido visual atractivo para Instagram, Facebook y más." },
  { titulo: "Fotografía", icono: "fas fa-camera", descripcion: "Fotografía profesional para productos y eventos." },
  { titulo: "Ilustración", icono: "fas fa-paint-brush", descripcion: "Ilustraciones personalizadas para tu marca." }
];

const testimonios = [
  "PixelArte capturó exactamente la esencia de mi marca. ¡Súper recomendados!",
  "Profesionales, creativos y rápidos. Mi emprendimiento creció gracias a su trabajo.",
  "El diseño del empaque quedó increíble. ¡Gracias PixelArte!",
  "El equipo de PixelArte es increíble. Me ayudaron a llevar mi marca al siguiente nivel.",
  "El diseño de mi sitio web es espectacular. ¡No puedo estar más feliz con el resultado!",
  "La atención al cliente es excepcional. Siempre están dispuestos a ayudar."
];

const portafolioImagenes = [
  "./imgs/portafolio1.jpg",
  "./imgs/portafolio2.jpg",
  "./imgs/portafolio3.jpg",
  "./imgs/portafolio4.jpg",
  "./imgs/portafolio5.jpg",
  "./imgs/portafolio6.jpg"
];

// ========== 2. Selectores ==========
const contenedorServicios = document.getElementById("servicios-container");
const contenedorTestimonios = document.getElementById("testimonios-container");
const contenedorPortafolio = document.getElementById("portafolio-grid");
const menuToggleIcon = document.querySelector(".menu-toggle i");
const navLinks = document.querySelector(".nav-links");
const enlacesNav = navLinks.querySelectorAll("a");

// ========== 3. Funciones ==========

function cargarServicios() {
  servicios.forEach((s) => {
    const card = document.createElement("div");
    card.className = "servicio-card";
    card.innerHTML = `
      <i class="${s.icono}"></i>
      <h3>${s.titulo}</h3>
      <p>${s.descripcion}</p>
    `;
    contenedorServicios.appendChild(card);
  });
}

function cargarTestimonios() {
  testimonios.forEach((t) => {
    const div = document.createElement("div");
    div.classList.add("testimonio");
    div.innerHTML = `
      <i class="fas fa-user user-icon"></i>
      <p>"${t}"</p>
    `;
    contenedorTestimonios.appendChild(div);
  });
}

function cargarPortafolio() {
  portafolioImagenes.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Proyecto del portafolio";
    contenedorPortafolio.appendChild(img);
  });
}

function configurarMenuHamburguesa() {
  menuToggleIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Alternar ícono
    menuToggleIcon.classList.toggle("fa-bars");
    menuToggleIcon.classList.toggle("fa-times");
  });

  enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggleIcon.classList.add("fa-bars");
        menuToggleIcon.classList.remove("fa-times");
      }
    });
  });
}

function configurarScrollUpBtn() {
  const scrollBtn = document.getElementById("scrollUpBtn");

  // Mostrar u ocultar según scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Al hacer clic, volver arriba
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========== 4. Inicialización ==========
function iniciar() {
  cargarServicios();
  cargarTestimonios();
  cargarPortafolio();
  configurarMenuHamburguesa();
  configurarScrollUpBtn();
}

// ========== 5. Ejecutar ==========
iniciar();
