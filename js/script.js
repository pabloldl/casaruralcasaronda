'use strict';
document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copy-phone');
const status = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Manual copy needed');
    await navigator.clipboard.writeText('651613435');
    manualCopy.hidden = true;
    status.textContent = 'Teléfono copiado.';
  } catch {
    manualCopy.hidden = false;
    status.textContent = 'Puedes copiar el número desde este campo.';
    const input = document.getElementById('phone-value');
    input.focus();
    input.select();
  }
});

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('preparing');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('figure').forEach(figure => {
    figure.classList.add('preparing');
    observer.observe(figure);
  });
}
