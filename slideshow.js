'use strict';

const resetBorders = () => {
  const slideshow = document.querySelectorAll('.slideshow');
  slideshow.forEach((slide) => {
    slide.style.border = '1px solid azure';
  });
};

const changeSlide = (event, slideshow) => {
  resetBorders();
  const hero = $('hero');
  const slideToSwitchTo = event.currentTarget;
  const slideName = slideToSwitchTo.className.split(' ')[1];
  slideToSwitchTo.style.border = '2px solid black';
  hero.style.transition = '1s ease-in-out';
  hero.style.backgroundImage = `url('/images/slideshow/${slideName}.svg')`;
};

document.addEventListener('DOMContentLoaded', () => {
  // add event handlers
  const slideshow = document.querySelectorAll('.slideshow');
  slideshow.forEach((slide) => {
    slide.addEventListener('click', (event) => changeSlide(event, slideshow));
  });
});
