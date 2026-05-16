// Remove no-js class
document.documentElement.classList.remove('no-js');

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav: scrolled state + active link
const nav      = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__links a');
const sections = document.querySelectorAll('section[id]');

const updateNav = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);

  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu toggle
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

// Scroll reveal
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -28px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth scroll for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
