const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const mobileCloseButton = document.getElementById("close-button");

mobileMenuIcon.addEventListener("click", (event) => {
  mobileMenu.show();
});

mobileCloseButton.addEventListener("click", (event) => {
  mobileMenu.close();
});
