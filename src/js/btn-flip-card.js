function btnFlidCard() {
  const skills = document.querySelectorAll('.flip-card');

  skills.forEach((skill) => {
    skill.addEventListener('click', (e) => {
      e.preventDefault();

      skill.classList.toggle('flip-card--active');
    });
  });
}

export default btnFlidCard();
