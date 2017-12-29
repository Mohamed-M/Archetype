/********************************************************
* 
** Slide Menu
*
********************************************************/

document.addEventListener('DOMContentLoaded', function() {
  let navToggle = document.querySelectorAll('.nav-toggle');
  let mainNavigation = document.querySelector('.main-navigation');

  navToggle.forEach(element => {
    element.addEventListener('click', function() {
      mainNavigation.classList.toggle('open');
    })
  });
});