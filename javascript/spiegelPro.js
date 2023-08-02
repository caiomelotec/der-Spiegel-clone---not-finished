const spanBtn = document.querySelector(".btns-sp .sp-close-icon");
const divAbo = document.querySelector(".spiegel-pro-div");
const btnJetztTest = document.querySelector(".btns-sp button");
const divAboPt2 = document.querySelector(".sp-pt-2");

spanBtn.addEventListener("click", () => {
  divAbo.style.display = "none";
  divAboPt2.style.display = "none";
});

let toggleIcon = true;

const arrowIcon = document.querySelector(".arrow-up-spn");

// default value from the arrowIcon
arrowIcon.innerHTML = `<ion-icon name="chevron-up"></ion-icon
>`;

// default valut for the div position
divAbo.style.bottom = "0rem";
divAboPt2.style.bottom = "-8rem";

arrowIcon.addEventListener("click", () => {
  toggleIcon = !toggleIcon;

  if (toggleIcon === true) {
    divAbo.style.bottom = "0rem";
    divAboPt2.style.bottom = "-8rem";
    arrowIcon.innerHTML = `<ion-icon name="chevron-up"></ion-icon>`;
    btnJetztTest.style.opacity = `1`;
    btnJetztTest.style.visibility = `visible`;
  } else {
    divAbo.style.bottom = "7rem";
    divAboPt2.style.bottom = "-2.4rem";
    arrowIcon.innerHTML = `<ion-icon name="chevron-down"></ion-icon>`;
    btnJetztTest.style.opacity = `0`;
    setTimeout(() => {
      btnJetztTest.style.visibility = `hidden`;
    }, 700);
  }
});
