const menuMobile = () => {
  const menuLinks = document.querySelectorAll('.navbar-mobile__link');
  const html = document.querySelector('html');

  function closeClicked() {
    const btn = document.querySelector('.btn-navbar');
    const navbar = document.querySelector('.navbar-mobile');

    html.style.overflowY = 'visible';

    btn.classList.toggle('btn-navbar--active');
    navbar.classList.toggle('navbar-mobile--visible');
  }

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeClicked);
  });
};

export default menuMobile();
