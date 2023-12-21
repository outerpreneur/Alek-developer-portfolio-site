const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const mobileCloseButton = document.getElementById("close-button");
const navLinks = document.querySelectorAll("nav ul li a");

mobileMenuIcon.addEventListener("click", (event) => {
  mobileMenu.show();
});

mobileCloseButton.addEventListener("click", (event) => {
  mobileMenu.close();
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    mobileMenu.close();
  });
});
