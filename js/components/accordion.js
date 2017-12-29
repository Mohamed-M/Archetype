/****************************************************************************
** 
** Accordion
**
****************************************************************************/

var accordionElementTitle = document.querySelectorAll('.accordion-element-title');
var accordionElementContent = document.querySelectorAll('.accordion-element-content');

accordionElementTitle.forEach(function(element) {

  element.addEventListener('click', function(e) {
    e.preventDefault();

    accordionElementContent.forEach(function(el) {
      el.style.display = 'none';
    });  

    // Collapse all accordion elements
    element.classList.remove('active');

    // Show target element only
    element.nextElementSibling.classList.add = 'active';
    element.nextElementSibling.style.display = 'block';
  });
});