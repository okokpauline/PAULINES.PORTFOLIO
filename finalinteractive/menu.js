'use strict';

const handleClickHamburger = (event) => {
  $('mySidenav').style.width = '250px';
};

const handleCloseHamburger = (event) => {
  $('mySidenav').style.width = '0px';
};

document.addEventListener('DOMContentLoaded', () => {
  // add event handlers
  $('hamburger').addEventListener('click', (event) => handleClickHamburger(event));
  $('closeButton').addEventListener('click', (event) => handleCloseHamburger(event));
});
