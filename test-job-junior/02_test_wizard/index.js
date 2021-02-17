const button = document.querySelector('button');
const steps = document.querySelectorAll('.step__point');
// console.log(steps);
let idActive;
let idDone = -1;

function start() {
  steps[0].classList.add('active');
  button.addEventListener('click', () => {
    console.log('click');
    idActive++;
    idDone++;
    steps.forEach((item, id) => {
      if (id === idDone) {
        item.classList.add('done');
      }
      if (id === idActive) {
        item.classList.add('active');
      }
    });
  });
}

start();
