//main.js
const background = document.querySelector(".background");
const playground = document.querySelector(".playground");
const timer = document.querySelector(".sign-timer");
const startBtn = document.querySelector(".sign-start");
const bgAudio = new Audio("./sound/bg.mp3");
const defaultTime = 5;

let isStart = false;
let isPlay = false;
let intervalId = null;
let countOfTimer = defaultTime;

const playbtn = () => {
  if (countOfTimer === defaultTime) {
    isStart = true;
  }
  if (isPlay === false) {
    isPlay = true;
    bgAudio.play();
    startBtn.innerHTML = `
                          <i class="fa-solid fa-stop"></i>
                        `;
  } else {
    isPlay = false;
    bgAudio.pause();
    startBtn.innerHTML = `
                  <i class="fa-solid fa-play"></i>
                  `;
  }
};

const timerCount = () => {
  if (isPlay === true) {
    intervalId = setInterval(() => {
      if (countOfTimer >= 10) {
        timer.innerHTML = `00:${countOfTimer--}`;
      } else if (countOfTimer < 10 && countOfTimer > 0) {
        timer.innerHTML = `00:0${countOfTimer--}`;
      } else {
        timer.innerHTML = `00:0${countOfTimer}`;
        bgAudio.pause();
        isStart = false;
        clearInterval(intervalId);
      }
    }, 1000);
  } else {
    clearInterval(intervalId);
  }
};

const displayImg = () => {
  if (isStart === true) {
    for (let i = 0; i < 10; i++) {
      createImgBug();
      createImgCarrot();
    }
    isStart = false;
  }
};

const createImgBug = () => {
  const imgBug = document.createElement("img");
  imgBug.setAttribute("src", "./img/bug.png");
  imgBug.setAttribute("class", "bug");
  playground.append(imgBug);
};

const createImgCarrot = () => {
  const imgCarrot = document.createElement("img");
  imgCarrot.setAttribute("src", "./img/carrot.png");
  imgCarrot.setAttribute("class", "carrot");
  playground.append(imgCarrot);
};

startBtn.addEventListener("click", (event) => {
  playbtn();
  timerCount();
  displayImg();
});

playground.addEventListener("click", () => {
  console.log("click");
  const imgg = document.querySelector("img");
  imgg.classList.add("inactive");
});
