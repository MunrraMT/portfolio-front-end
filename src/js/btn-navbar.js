function btnNavebar() {
  const btn = document.querySelector('.btn-navbar');
  const navbar = document.querySelector('.navbar-mobile');
  const html = document.querySelector('html');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (btn.getAttribute('class') !== 'btn-navbar btn-navbar--active') {
      html.style.overflowY = 'hidden';
    }

    if (btn.getAttribute('class') === 'btn-navbar btn-navbar--active') {
      html.style.overflowY = 'visible';
    }

    btn.classList.toggle('btn-navbar--active');
    navbar.classList.toggle('navbar-mobile--visible');
  });
}

export default btnNavebar();
