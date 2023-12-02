//const hamburger = document.querySelector(".hamburger");
//const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener('click', dropMenu);

function dropMenu() {
    navmenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

//hamburger.addEventListener("click", mobileMenu);
// test.addEventListener("click", testClick);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }
