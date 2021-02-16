let slides = document.querySelectorAll('.slide-item');
let slider = [];

// console.log(slides);
for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}

// console.log(slider);

let step = 0; //шаг, какую картинку показывать в блоке
let offset = 0; //смещение

const draw = () => {
  let img = document.createElement('img');
  img.src = slider[step];
  img.classList.add('slide-item');
  img.style.left = offset * 512 + 'px';
  document.querySelector('.slide').appendChild(img);
  if (step + 1 === slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
};

const left = () => {
  document.querySelector('.next').removeEventListener('click', left, false);
  const slides2 = document.querySelectorAll('.slide-item');
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offset2 * 512 - 512 + 'px';
    offset2++;
  }
  setTimeout(() => {
    slides2[0].remove();
    draw();
    document.querySelector('.next').addEventListener('click', left, false);
  }, 1000);
};
draw();
draw();
document.querySelector('.next').addEventListener('click', left, false);
