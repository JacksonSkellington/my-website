const navLinks = document.querySelector('.nav__links');

const navToggle = document.querySelector('.nav__mobile-toggle');

navToggle.addEventListener('click', () => {
  const visibility = navLinks.getAttribute('data-visible');
  if (visibility === 'false') {
    navLinks.setAttribute('data-visible', 'true');
    navLinks.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else if (visibility === 'true') {
    navLinks.setAttribute('data-visible', 'false');
    navLinks.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
