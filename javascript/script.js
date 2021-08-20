// Navigation, dropdown
function displayProjects() {
  document.getElementById("projectsDropdown").classList.toggle("show");
}

function displayContacts() {
  document.getElementById("contactsDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Hamburger menu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".toggle-nav");

  // toggle navs
  nav.classList.toggle("nav-active");

  // burger animation
  burger.classList.toggle("toggle");
};
