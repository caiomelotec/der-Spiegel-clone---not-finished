const tabsBox = document.querySelector(".tabs-box");
// const allTabs = document.querySelector(".tab");
const arrowIcons = document.querySelectorAll(".icon ion-icon");
let isDragging = false;

const handleIcon = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft);

  console.log(scrollVal);
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";

  arrowIcons[1].parentElement.style.display =
    scrollVal > 1900 ? "none" : "flex";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabsBox.scrollLeft += icon.id === "left" ? -200 : 200;
    setTimeout(() => handleIcon(), 50);
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcon();
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mousedown", () => (isDragging = true));
document.addEventListener("mouseup", dragStop);
