const hamburger = document.getElementById("arifubila_hamburger");
const navLinks = document.getElementById("arifubila_nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
