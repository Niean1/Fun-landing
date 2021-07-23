const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".superButton");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/////////////////////

const el = document.querySelector(".header__burger");
const le = document.querySelector(".header__menu");
const body = document.querySelector("body");
document.querySelector(".header__burger").addEventListener("click", () => {
  el.onclick = function () {
    el.classList.toggle("active");
    le.classList.toggle("active");
    body.classList.toggle("lock");
  };
});

document.getElementById("1").addEventListener("click", () => {
  el.click();
});
document.getElementById("2").addEventListener("click", () => {
  el.click();
});
document.getElementById("3").addEventListener("click", () => {
  el.click();
});
document.getElementById("4").addEventListener("click", () => {
  el.click();
});
document.getElementById("5").addEventListener("click", () => {
  el.click();
});
document.getElementById("6").addEventListener("click", () => {
  el.click();
});
document.getElementById("7").addEventListener("click", () => {
  el.click();
});
document.getElementById("8").addEventListener("click", () => {
  el.click();
});
