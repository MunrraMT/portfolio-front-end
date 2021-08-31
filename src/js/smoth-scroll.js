const smothScroll = () => {
  const internalLink = document.querySelectorAll('a[href^="#"]');
  const isSmoothScrollSupported =
    'scrollBehavior' in document.documentElement.style;

  if (!isSmoothScrollSupported) {
    internalLink.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      });
    });
  }

  const html = document.querySelector('html');
  html.style.scrollBehavior = 'smooth';
};

export default smothScroll();
