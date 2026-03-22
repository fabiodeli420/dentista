// =========================================
//   DENTISTA – JavaScript
// =========================================

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
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

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Formulario turno → WhatsApp
function sendTurno() {
  const nombre   = document.getElementById('tNombre').value.trim();
  const telefono = document.getElementById('tTelefono').value.trim();
  const servicio = document.getElementById('tServicio').value;
  const obra     = document.getElementById('tObra').value;
  const mensaje  = document.getElementById('tMensaje').value.trim();

  if (!nombre || !telefono) {
    showToast('⚠️ Completá nombre y teléfono');
    return;
  }

  let msg = `🦷 *Solicitud de turno*\n\n`;
  msg += `👤 Nombre: ${nombre}\n`;
  msg += `📞 Teléfono: ${telefono}\n`;
  if (servicio) msg += `🔬 Servicio: ${servicio}\n`;
  if (obra)     msg += `💳 Obra social: ${obra}\n`;
  if (mensaje)  msg += `📝 Mensaje: ${mensaje}\n`;

  // Reemplazá [NUMERO] con el número real del dentista
  const waNumber = '[NUMERO]';
  window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg), '_blank');
  showToast('✓ Redirigiendo a WhatsApp...');
}

// Toast
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `
    position:fixed; bottom:5rem; left:50%; transform:translateX(-50%);
    background:#1b3a5c; color:white; padding:0.7rem 1.5rem;
    border-radius:8px; font-family:'DM Sans',sans-serif;
    font-size:0.85rem; z-index:9999;
    box-shadow:0 8px 25px rgba(27,58,92,0.3);
    animation:toastIn 0.3s ease;
  `;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

const style = document.createElement('style');
style.textContent = `@keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`;
document.head.appendChild(style);
