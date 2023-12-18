'use strict';

const changeSlide = (event, slideshow) => {
  const slideToSwitchTo = event.currentTarget.className.split(' ')[1];
  $('hero').style.backgroundImage = `url('/images/slideshow/${slideToSwitchTo}.jpg')`;
};

document.addEventListener('DOMContentLoaded', () => {
  // add event handlers
  const slideshow = document.querySelectorAll('.slideshow');
  slideshow.forEach((slide) => {
    slide.addEventListener('click', (event) => changeSlide(event, slideshow));
  });
});
