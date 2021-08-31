const socialMedia = () => {
  const gitHubIcon = document.querySelector('.social-media__img-github');
  const linkedInIcon = document.querySelector('.social-media__img-linkedin');

  gitHubIcon.addEventListener('mouseover', () => {
    gitHubIcon.setAttribute(
      'src',
      '../public/fontawsome/github-square-brands-white.svg'
    );
  });

  gitHubIcon.addEventListener('mouseout', () => {
    gitHubIcon.setAttribute(
      'src',
      '../public/fontawsome/github-square-brands.svg'
    );
  });

  linkedInIcon.addEventListener('mouseover', () => {
    linkedInIcon.setAttribute(
      'src',
      '../public/fontawsome/linkedin-brands-blue.svg'
    );
  });

  linkedInIcon.addEventListener('mouseout', () => {
    linkedInIcon.setAttribute(
      'src',
      '../public/fontawsome/linkedin-brands.svg'
    );
  });
};

export default socialMedia();
