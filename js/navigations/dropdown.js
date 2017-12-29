/********************************************************
* 
** Dropdown Menu
*
********************************************************/

document.addEventListener('DOMContentLoaded', dropdown);

function dropdown() {
  let dropdownNav = document.querySelector('.dropdown-nav');
  let dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdownNav.addEventListener('click', function(e) {
    e.preventDefault();

    if(dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });
}
