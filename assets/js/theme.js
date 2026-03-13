// Dark mode toggle
const mode = localStorage.getItem("theme") || 
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (mode === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  document.getElementById("highlight_theme_dark")?.removeAttribute("media");
  document.getElementById("highlight_theme_light")?.setAttribute("media", "none");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("light-toggle");
  
  if (toggle) {
    toggle.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      
      if (newTheme === "dark") {
        document.getElementById("highlight_theme_dark")?.removeAttribute("media");
        document.getElementById("highlight_theme_light")?.setAttribute("media", "none");
      } else {
        document.getElementById("highlight_theme_light")?.removeAttribute("media");
        document.getElementById("highlight_theme_dark")?.setAttribute("media", "none");
      }
    });
  }
});
