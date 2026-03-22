// DENTAL STUDIO — JS

// Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);
});

// Navbar
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 80);
  updateActiveLink();
});

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMobile').classList.toggle('open');
});
document.querySelectorAll('.nav-mobile .nav-link').forEach(l => {
  l.addEventListener('click', () => document.getElementById('navMobile').classList.remove('open'));
});

// Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Formulario
function sendTurno() {
  const nombre   = document.getElementById('tNombre').value.trim();
  const telefono = document.getElementById('tTelefono').value.trim();
  const servicio = document.getElementById('tServicio').value;
  const obra     = document.getElementById('tObra').value;
  const mensaje  = document.getElementById('tMensaje').value.trim();

  if (!nombre || !telefono) { showToast('Completá nombre y teléfono'); return; }

  let msg = `🦷 *Solicitud de turno — Dental Studio*\n\n`;
  msg += `👤 Nombre: ${nombre}\n`;
  msg += `📞 Teléfono: ${telefono}\n`;
  if (servicio) msg += `✦ Tratamiento: ${servicio}\n`;
  if (obra)     msg += `💳 Obra social: ${obra}\n`;
  if (mensaje)  msg += `📝 Consulta: ${mensaje}\n`;

  const waNumber = '[NUMERO]'; // Reemplazá con el número real
  window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg), '_blank');
  showToast('Redirigiendo a WhatsApp...');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `
    position:fixed; bottom:5rem; left:50%; transform:translateX(-50%);
    background:#0a0a0a; color:#f5f0e8; padding:0.8rem 2rem;
    font-family:'Jost',sans-serif; font-size:0.78rem; letter-spacing:2px;
    z-index:9999; border:1px solid rgba(201,168,76,0.3);
    animation:toastIn 0.3s ease;
  `;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

const s = document.createElement('style');
s.textContent = `@keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`;
document.head.appendChild(s);
