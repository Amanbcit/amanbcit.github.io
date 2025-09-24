



window.addEventListener("scroll", function () {
  const header = document.querySelector('.paralax');
  if (header) {
    header.style.backgroundPosition = `center ${-window.scrollY * 0.5}px`;
  }
});


//adding scroll detction for the navigation bar 

let ticking = false;

function updateNav() {
  const nav = document.getElementById('nav-menu');
  
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  ticking = false;
}

window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(updateNav);
    ticking = true;
  }
});
