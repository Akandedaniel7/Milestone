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

// Side Menu
const sidemenu = document.getElementById("allsidemenu");

function openmenu() {
  sidemenu.style.rigth = "9%";
}

function closemenu() {
  sidemenu.style.top = "-40%";
}
