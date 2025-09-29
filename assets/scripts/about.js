
//click functionality for aboutme links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("skills-content");

function opentab(event, tabname) {
  var clickedTab = event.currentTarget;
  var clickedContent = document.getElementById(tabname);

  if (clickedTab.classList.contains("active-skill")) {
    clickedTab.classList.remove("active-skill");
    clickedContent.classList.remove("active-content");
    return;
  }

  for (let tablink of tablinks) {
    tablink.classList.remove("active-skill");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-content");
  }
  clickedTab.classList.add("active-skill");
  clickedContent.classList.add("active-content");
}
