/********************************************************
* 
** Shrinking Navigation Bar
*
********************************************************/

const shrinkingNavbar = document.querySelector(".shrinking-navbar")
const m = document.querySelector("main");
let hHeight;

function setTopPadding() {
  hHeight = shrinkingNavbar.offsetHeight;
  m.style.paddingTop = (hHeight / 10) + "rem";
}

function onScroll() {
  window.addEventListener("scroll", function (e) {
    var y = window.pageYOffset;
    // Refactor to use classList.toggle
    if (y > 100) {
      shrinkingNavbar.classList.add("scroll");
    } else {
      shrinkingNavbar.classList.remove("scroll");
    }
  });
}

window.onload = function () {
  setTopPadding();
  onScroll();
};

window.onresize = function () {
  setTopPadding();
};
