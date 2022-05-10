const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// add class to container
open.addEventListener('click', () => {
   container.classList.add('show-nav');
});

// remove class from container
close.addEventListener('click', () => {
   container.classList.remove('show-nav');
});