var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__toggle");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed");
    navMain.classList.add("menu--opened");
  } else {
    navMain.classList.add("menu--closed");
    navMain.classList.remove("menu--opened");
  }
});

var link = document.querySelector(".info__call");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal__close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay__show");
  popup.classList.add("modal__show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay__show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      overlay.classList.remove("modal-overlay__show");
    }
  }
});

var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal__close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay__show");
  popup.classList.add("modal__show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay__show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      overlay.classList.remove("modal-overlay__show");
    }
  }
});
