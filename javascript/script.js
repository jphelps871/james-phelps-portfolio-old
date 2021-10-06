const projectsDropDown = document.getElementById("projectsDropdown");
const contactsDropDown = document.getElementById("contactsDropdown");

// Navigation, dropdown
function displayProjects() {
  projectsDropDown.classList.toggle("show");
  contactsDropDown.classList.remove("show");
}

function displayContacts() {
  contactsDropDown.classList.toggle("show");
  projectsDropDown.classList.remove("show");
}

window.onclick = function (event) {
  if (event.target.matches(".dropbtn")) return;

  const dropdowns = document.getElementsByClassName("dropdown-content");

  for (let i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
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
