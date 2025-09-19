window.addEventListener('scroll', function() {
  // Adjust the 0.5 value for more/less parallax effect
  document.body.style.backgroundPositionY = -(window.scrollY * 0.2) + 'px';
});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("skills-content");

function opentab(tabname){
  // Find the clicked tab and its content
  var clickedTab = event.currentTarget;
  var clickedContent = document.getElementById(tabname);

  // If already active, remove active classes (toggle off)
  if (clickedTab.classList.contains("active-skill")) {
    clickedTab.classList.remove("active-skill");
    clickedContent.classList.remove("active-content");
    return;
  }

  // Otherwise, activate clicked tab and content, deactivate others
  for(let tabl of tablinks){
    tabl.classList.remove("active-skill");
  }
  for(let tabcon of tabcontents){
    tabcon.classList.remove("active-content");
  }
  clickedTab.classList.add("active-skill");
  clickedContent.classList.add("active-content");
}