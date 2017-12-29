// $(document).ready(function(){
// 	$(window).bind('scroll', function(e){
// 		parallax();
// 	});
// });
// function parallax() {
// 	var scrollPosition = $(window).scrollTop();
// 	console.log(scrollPosition);
// 	$('#grid').css('top', (0 - (scrollPosition)*0.2)+'px');
// }

document.addEventListener('DOMContentLoaded', parallax);

function parallax() {
  window.onscroll = () => {
      let scrollPosition = window.scrollY;
      let parallaxGrid = document.querySelector('.parallax-grid');
      console.log(scrollPosition);
      parallaxGrid.style.top = (0 - (scrollPosition)*0.2)+'px';
    	// $('#grid').css('top', (0 - (scrollPosition)*0.2)+'px');
  }
}