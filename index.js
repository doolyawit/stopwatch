//Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variable for leading zero (เติม 0)
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variables for set interval & timerstatus
let timerInterval = null;
let timerStatus = "stopped";

//Stopwatch Function
function stopWatch() {
  seconds++; //start
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++; // 1 minutes
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++; // 1 hours
    }
  }
  if (seconds < 10) {
    // add0
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds); //show time
}
//play pause button
startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    // click play
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    // click pause
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});
//reset button
resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
