const menuToggle = document.querySelector('.mobile-nav-toggle');
const currentYear = document.querySelector('#current-year');

function syncMenuState(open) {
  if (!menuToggle) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

menuToggle?.addEventListener('click', () => {
  window.requestAnimationFrame(() => syncMenuState(document.body.classList.contains('mobile-nav-active')));
});

document.querySelectorAll('#navmenu a').forEach((link) => {
  link.addEventListener('click', () => window.requestAnimationFrame(() => syncMenuState(false)));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('mobile-nav-active')) {
    menuToggle?.click();
  }
});

if (currentYear) currentYear.textContent = String(new Date().getFullYear());
