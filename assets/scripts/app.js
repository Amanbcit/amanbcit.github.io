document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // Adjust the 0.5 value for more/less parallax effect
    document.body.style.backgroundPositionY = -(window.scrollY * 0.2) + "px";
  });
});
