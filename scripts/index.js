let count = 0;
const countElement = document.getElementById("cart-count");

const audioMerrychhistmas = new Audio("assets/audio/merry-christmas.mp3");
const audioConfetti = new Audio("assets/audio/confetti.wav");

audioMerrychhistmas.volume = 0.4;
audioConfetti.volume = 0.2;

function addItem() {
  if (count === 0) {
    countElement.style.display = "block";
  }

  count++;
  countElement.innerText = count;

  audioMerrychhistmas.play();
  audioConfetti.play();

  handleConfettiEffect();
}
