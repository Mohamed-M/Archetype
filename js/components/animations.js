var demoAnimations = document.querySelector('#demo-animations');
var div = demoAnimations.querySelectorAll('div');

div.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.target.classList.add('animated', e.target.innerText);
    console.log(e.target);
  });
});