const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener('click', dropMenu);

function dropMenu() {
    navmenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}
