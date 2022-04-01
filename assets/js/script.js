const $stoneButton1 = document.querySelector(".button-stone-player-1");
const $paperButton1 = document.querySelector(".button-paper-player-1");
const $scissorsButton1 = document.querySelector(".button-scissors-player-1");

const $stoneButton2 = document.querySelector(".button-stone-player-2");
const $paperButton2 = document.querySelector(".button-paper-player-2");
const $scissorsButton2 = document.querySelector(".button-scissors-player-2");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

function movePlayer1Stone() {
  $fieldPlayer1.innerHTML =
    '<img class= "move-image" src="assets/img/stone.png">';
}
$stoneButton1.addEventListener(
  "click",
  movePlayer1Stone
); /*modo 1 - function até aqui */

$paperButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class= "move-image" src="assets/img/paper.png">';
}); /*modo 2 - function dentro */

$scissorsButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class= "move-image" src="assets/img/scissors.png">';
});

$stoneButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class= "move-image" src="assets/img/stone.png">';
});

$paperButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class= "move-image" src="assets/img/paper.png">';
});

$scissorsButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class= "move-image" src="assets/img/scissors.png">';
});
