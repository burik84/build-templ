const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');

let count = 0;
let width;

const rollSlider = () => {
  const bias = count * width;
  sliderLine.style.transform = `translateX(${-bias}px)`;
};
function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach((item) => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  // console.log(width);
  rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', () => {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});
