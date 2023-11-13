const btnOrder = document.querySelector(".order-btn");
const orderMod = document.querySelector(".order-modal");
const contentSect = document.querySelector(".whole-content");
const exitBtn = document.querySelector(".exit-modal");
const changeDeck = document.querySelector(".deck-image");
const btnLeft = document.querySelector(".left-shift");
const btnRight = document.querySelector(".right-shift");

btnLeft.addEventListener("click", function () {
  changeDeck.src = "/assets/deck1.jpg";
});

btnOrder.addEventListener("click", function () {
  orderMod.classList.remove("hide");
  contentSect.classList.add("active");
  btnOrder.style.cursor = "default";
});

exitBtn.addEventListener("click", function () {
  orderMod.classList.add("hide");
  contentSect.classList.remove("active");
});
