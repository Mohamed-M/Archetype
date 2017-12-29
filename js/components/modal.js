/****************************************************************************
** 
*** Modal & Notification
**
****************************************************************************/

// Get modal element
var modal = document.querySelector('#modalSimple');

// Get open modal button
var modalBtn = document.querySelector('#modalBtn');

// Get close button
var closeBtn = document.querySelector('#closeBtn');

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Function to close when clicked outside
function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = "none";  
  }
}

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);