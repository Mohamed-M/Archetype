/********************************************************
* 
** Push Menu JavaScript
*
********************************************************/

document.addEventListener('DOMContentLoaded', function() {
  let navToggle = document.querySelectorAll('.nav-toggle');
  let wrapper = document.querySelector('.wrapper');

  navToggle.forEach(element => {
    element.addEventListener('click', function() {
      wrapper.classList.toggle('open');
    });
  });
});
