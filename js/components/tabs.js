// var tabsLinks = document.querySelectorAll('.tabs-links a');

// tabsLinks.forEach(function(element) {

//   element.addEventListener('click', function(e) {
//     e.preventDefault();

//     var newTab = element.getAttribute('href');
    
//     console.log(newTab);

//     // newTab.parentNode.children.style.display = 'none';
//     // newTab.style.display = 'block';

//     this.parentNode.classList.remove = 'active';
//     this.parentNode.classList.add = 'active';


//   })
// });


$( ".tabs-links a" ).on( "click", function( e ) {
  e.preventDefault();

  // Get the target tab
  var newTab = $( this ).attr( "href" );

  // Show the targeted tab content while hiding the rest
  $( newTab ).show().siblings().hide();

  // Add the active class to the parent list item while removing it from the rest.
  $( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );

});