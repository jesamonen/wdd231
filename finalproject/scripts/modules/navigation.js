export function initNavigation() {
  const hamburgerBtn = document.querySelector('#hamburger-btn');
  const navMenu = document.querySelector('#primary-nav');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Wayfinding logic: Set 'active' class based on current HTML filename
  const links = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}