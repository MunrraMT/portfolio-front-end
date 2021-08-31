function writingName() {
  const name = 'André Rodrigues';
  const textName = document.querySelector('.my-name__text');

  let count = 0;
  let myName = [];

  textName.textContent = `</>`;

  const escrever = setInterval(() => {
    if (name === myName) clearInterval(escrever);

    myName.push(name[count]);

    textName.textContent = `<${myName.join('')} />`;

    count++;
  }, 150);
}

export default writingName();
