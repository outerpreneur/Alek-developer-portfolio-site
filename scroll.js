window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    // Add a class to the header when scrolling starts
    header.classList.add(
      "border-b",
      "border-black",
      "dark:border-white",
      "opacity-100"
    );
  } else {
    // Remove the class when scrolling back to the top
    header.classList.remove(
      "border-b",
      "border-black",
      "dark:border-white",
      "opacity-0"
    );
    header.classList.add("opacity-0");
  }
});

window.addEventListener("scroll", function () {
  const stickySocial = document.getElementById("sticky-social");
  const scrollPercent =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  if (scrollPercent > 95) {
    // Add a class to the header when scrolling starts
    stickySocial.classList.add("hidden");
    stickySocial.classList.add("opacity-100");
  } else {
    // Remove the class when scrolling back to the top
    stickySocial.classList.remove("hidden");
    stickySocial.classList.add("opacity-0");
  }
});
