const menuButton = document.querySelector('.menu-button');
const menuPanel = document.querySelector('#menuPanel');
const closeMenu = document.querySelector('.close-menu');
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();
function toggleMenu(open){
  menuPanel.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
}
menuButton.addEventListener('click', () => toggleMenu(true));
closeMenu.addEventListener('click', () => toggleMenu(false));
menuPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('keydown', e => { if(e.key === 'Escape') toggleMenu(false); });

// Gentle curiosity moments: drifting leaves, very subtle and non-essential.
const symbols = ['🍃','✦','❧','🌿'];
setInterval(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const leaf = document.createElement('span');
  leaf.textContent = symbols[Math.floor(Math.random()*symbols.length)];
  leaf.style.position = 'fixed';
  leaf.style.left = Math.random()*100 + 'vw';
  leaf.style.top = '-2rem';
  leaf.style.zIndex = '5';
  leaf.style.pointerEvents = 'none';
  leaf.style.opacity = '.6';
  leaf.style.transition = 'transform 8s linear, opacity 8s linear';
  document.body.appendChild(leaf);
  requestAnimationFrame(() => {
    leaf.style.transform = `translate(${(Math.random()*120)-60}px, 110vh) rotate(${Math.random()*360}deg)`;
    leaf.style.opacity = '0';
  });
  setTimeout(() => leaf.remove(), 8200);
}, 4500);
