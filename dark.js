const toggleTheme = document.getElementById("toggle-input");
const bodyTag = document.getElementById("bodytag");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  toggleTheme.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  toggleTheme.checked = false;
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

toggleTheme.addEventListener("change", (event) => {
  bodyTag.classList.toggle("dark");
});

lightIcon.addEventListener("click", (event) => {
  bodyTag.classList.remove("dark");
  toggleTheme.checked = false;
});

darkIcon.addEventListener("click", (event) => {
  bodyTag.classList.add("dark");
  toggleTheme.checked = true;
});
