//main.js
const background = document.querySelector(".background");
const playground = document.querySelector(".playground");
const timer = document.querySelector(".sign-timer");
const startBtn = document.querySelector(".sign-start");
const audio = new Audio("./sound/bg.mp3");

const startButton = () => {
  if (startBtn.classList.contains("stop")) {
    startBtn.classList.remove("stop");
    audio.play();
    startBtn.innerHTML = `
                  <i class="fa-solid fa-stop"></i>
                  `;
  } else {
    startBtn.classList.add("stop");
    audio.pause();
    startBtn.innerHTML = `
                  <i class="fa-solid fa-play"></i>
                  `;
  }
};

const timerCount = () => {
  let count = 10;
  if (!startBtn.classList.contains("stop")) {
    const counter = setInterval(() => {
      if (count >= 10) {
        timer.innerHTML = `00:${count}`;
      } else if (count < 10 && count >= 0) {
        timer.innerHTML = `00:0${count}`;
      } else {
        clearInterval(counter);
      }
      count--;
    }, 1000);
  } else {
    clearInterval(counter);
  }

  return count;
};

// const timeCount = setInterval({}, 1000);

startBtn.addEventListener("click", (event) => {
  startButton();
  timerCount();
});

const imgBug = document.createElement("img");
imgBug.setAttribute("src", "./img/bug.png");
const imgCarrot = document.createElement("img");
imgCarrot.setAttribute("src", "./img/carrot.png");
playground.append(imgBug, imgCarrot);
