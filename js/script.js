'use strict';
document.querySelector('#year').textContent = new Date().getFullYear();
const dialog = document.querySelector('#lightbox');
const photos = [...document.querySelectorAll('.photo-open')];
let active = 0;
let opener;
function displayPhoto(index) {
  active = (index + photos.length) % photos.length;
  const source = photos[active].querySelector('img');
  const image = dialog.querySelector('img');
  image.src = photos[active].dataset.full || source.currentSrc || source.src;
  image.alt = source.alt;
  dialog.querySelector('#lightbox-caption').textContent = photos[active].dataset.caption;
  dialog.querySelector('.lightbox-count').textContent = `${active + 1} / ${photos.length}`;
}
if (typeof dialog.showModal === 'function') {
  photos.forEach((photo, index) => photo.addEventListener('click', () => {
    opener = photo;
    displayPhoto(index);
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.querySelector('.lightbox-close').focus();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.previous').addEventListener('click', () => displayPhoto(active - 1));
  dialog.querySelector('.next').addEventListener('click', () => displayPhoto(active + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      const controls = [...dialog.querySelectorAll('button')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      displayPhoto(active + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }});
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    opener?.focus({preventScroll:true});
  });
  let startX = 0, startY = 0;
  const stage = dialog.querySelector('.lightbox-stage');
  stage.addEventListener('touchstart', event => {
    startX = event.changedTouches[0].clientX; startY = event.changedTouches[0].clientY;
  }, {passive:true});
  stage.addEventListener('touchend', event => {
    const dx = event.changedTouches[0].clientX - startX;
    const dy = event.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) displayPhoto(active + (dx < 0 ? 1 : -1));
  }, {passive:true});
} else {
  photos.forEach(photo => photo.addEventListener('click', () => { window.location.href = photo.querySelector('img').src; }));
}
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
  }), {threshold:.12});
  photos.forEach(photo => { photo.classList.add('reveal-ready'); observer.observe(photo); });
}
