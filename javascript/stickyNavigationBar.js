window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  nav.classList.toggle("sticky", window.scrollY > 0);

  const hamIcon = document.querySelector(".ham-menu");
  hamIcon.style.display = window.scrollY > 0 ? "flex" : "none";
});
