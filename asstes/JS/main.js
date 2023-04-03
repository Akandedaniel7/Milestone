// Header On Scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Newsletter
const newsletter = document.getElementById("newsLetter");

function newsLetterOpen() {
  newsletter.style.right = "-60%";
}

function newsLetterClose() {
  newsletter.style.right = "-100%";
}

// Newsletter Vallidation

// Side Menu
const allsidemenu = document.getElementById("allsidemenu");

function allopenmenu() {
  allsidemenu.style.right = "0";
}

function allclosemenu() {
  allsidemenu.style.right = "-100%";
}
