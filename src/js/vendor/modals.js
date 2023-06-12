const btns = document.querySelector(".header__btn");
const modalsOverlay = document.querySelector(".modals-overlay");
const modals = document.querySelector(".modals-modal");
const login = document.querySelector(".modals-btn--login");
const signUp = document.querySelector(".modals-btn--sign-up");
const close = document.querySelector(".modals-close");

btns.addEventListener("click", function () {
  modalsOverlay.classList.add("modals-overlay--visable");
  modals.classList.add("modals-modal--visable");
});

close.addEventListener("click", function () {
  modalsOverlay.classList.remove("modals-overlay--visable");
  modals.classList.remove("modals-modal--visable");
});

login.addEventListener("click", function () {
  login.classList.add("modals-btn--active");
  signUp.classList.remove("modals-btn--active");
  document.getElementById("email").classList.add("form__input--hiden");
});

signUp.addEventListener("click", function () {
  signUp.classList.add("modals-btn--active");
  login.classList.remove("modals-btn--active");
  document.getElementById("email").classList.remove("form__input--hiden");
});
