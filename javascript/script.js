const projectsDropDown = document.getElementById("projectsDropdown");
const contactsDropDown = document.getElementById("contactsDropdown");
const contact = document.querySelector(".contact");

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

// Copy either email or mobile
contact.addEventListener("click", function({target}) {
  if (target.nodeName !== 'A') return;

  let copiedText;
  
  if (target.innerText === 'Email') {
    copiedText =  navigator.clipboard.writeText('james.phelps1995@live.com');
  } else {
    copiedText =  navigator.clipboard.writeText('07432242657');
  }

  copiedText.then( function() {
      alert("Copied");
    }, function(error) {
      alert("Unable to copy");

      document.querySelector('.copy-email').innerText = "james.phelps1995@live.com";
      document.querySelector('.copy-mobile').innerText = "07432252647";

    })
})