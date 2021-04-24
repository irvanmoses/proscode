// Dark Theme Toggle
const themeSwitch = document.querySelector(".theme-switch");
const body = document.body;

themeSwitch.addEventListener("click", function() {
    setDarkMode = localStorage.getItem('dark-theme');

    if (setDarkMode !== "on") {
        body.classList.toggle("dark-theme");
        setDarkMode = localStorage.setItem('dark-theme', 'on');
    } else {
        body.classList.toggle("dark-theme");
        setDarkMode = localStorage.setItem('dark-theme', null);
    }
});


let setDarkMode = localStorage.getItem('dark-theme');

if (setDarkMode === 'on') {
    body.classList.toggle("dark-theme");
}

// Sidebar Menu (mobile)
var checkbox = document.querySelector('#check');
var hamburger = document.querySelector('.sidebar');

function openSidebar() {    
  if (checkbox.checked == true) {
      hamburger.classList.add('sidebarOpen');
      hamburger.classList.remove('sidebar');
  }
}

var closeBtn = document.querySelector('.closeBtn')

closeBtn.addEventListener('click', () => {
    hamburger.classList.remove('sidebarOpen');
    hamburger.classList.add('sidebar');

    if (checkbox.checked == true) {
        checkbox.checked = false;
    }
})


//  Dropdown Animation
var dropdown = document.querySelector(".dropdown");
var sidebarsubMenu = document.querySelector(".sidebar-submenu");
var dropdownIcon = document.querySelector(".fa-angle-right");

dropdown.addEventListener("click", function () {
  if (dropdownIcon.classList.contains("dropdown-active")) {
    dropdownIcon.classList.remove("dropdown-active");
    sidebarsubMenu.style.display = "none";
  } else {
    dropdownIcon.classList.add("dropdown-active");
    sidebarsubMenu.style.display = "block";
  }
});






