//main.js
const background = document.querySelector(".background");
const playground = document.querySelector(".playground");
const timer = document.querySelector(".sign-timer");
const startBtn = document.querySelector(".sign-start");
const signCounter = document.querySelector(".sign-counter");
const bgAudio = new Audio("./sound/bg.mp3");

let isStart = false;
let isPlay = false;
let intervalId = null;
let noOfCarrot = null;

playground.style.height = `${playground.getBoundingClientRect().height - 50}px`;
playground.style.width = `${playground.getBoundingClientRect().width - 50}px`;

const playbtn = () => {
  if (isPlay === false) {
    isPlay = true;
    bgAudio.play();
    displayImg();
    startBtn.innerHTML = `
                          <i class="fa-solid fa-stop"></i>
                        `;
  } else {
    isPlay = false;
    // bgAudio.pause();
    bgAudio.load();
    deleteImg();
    startBtn.innerHTML = `
                  <i class="fa-solid fa-play"></i>
                  `;
    signCounter.innerHTML = `10`;
  }
};

const timerCount = () => {
  let countOfTimer = 10;
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
  noOfCarrot = 10;
  for (let i = 0; i < 10; i++) {
    createImgBug(i);
    createImgCarrot(i);
  }
};

const deleteImg = () => {
  const imgAll = playground.querySelectorAll("img");
  imgAll.forEach((box) => {
    box.remove();
  });
};

const createImgBug = (id) => {
  const imgBug = document.createElement("img");
  imgBug.setAttribute("src", "./img/bug.png");
  imgBug.setAttribute("class", "bug");
  imgBug.setAttribute("data-id", `${id}`);
  playground.append(imgBug);

  const top = Math.round(Math.random() * 100);
  const left = Math.round(Math.random() * 100);
  imgBug.style.top = `${top}%`;
  imgBug.style.left = `${left}%`;

  // imgBug.style.transform = "translateX(-50%)";
};

const createImgCarrot = (id) => {
  const imgCarrot = document.createElement("img");
  imgCarrot.setAttribute("src", "./img/carrot.png");
  imgCarrot.setAttribute("class", "carrot");
  imgCarrot.setAttribute("data-id", `${id}`);
  playground.append(imgCarrot);

  const top = Math.round(Math.random() * 100);
  const left = Math.round(Math.random() * 100);
  imgCarrot.style.top = `${top}%`;
  imgCarrot.style.left = `${left}%`;

  imgCarrot.addEventListener("click", () => {
    imgCarrot.classList.add("inactive");
    signCounter.innerHTML = `${--noOfCarrot}`;
  });
};

startBtn.addEventListener("click", (event) => {
  playbtn();
  timerCount();
});
