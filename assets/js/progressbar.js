// Progress bar for reading
document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.createElement("div");
  progressBar.id = "progress";
  document.body.prepend(progressBar);

  window.addEventListener("scroll", function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
});
