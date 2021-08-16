let interval;

function setAlarm() {
  const alarmSetEl = document.getElementById("alarmSet")
  const totalSeconds = parseInt(alarmSetEl.value)
 
  const now = Date.now()
  const limitTime = now + totalSeconds * 1000 // seconds to ms
  // console.log(now, limitTime, new Date(limitTime))

  countdown(limitTime)
  interval = setInterval(() => countdown(limitTime), 1000)
}

function countdown(limitTimeMs) {
  const nowMs = Date.now()
  const remainingTimeMs = Math.max(0, limitTimeMs - nowMs)

  if (remainingTimeMs == 0) {
    playAlarm()
    clearInterval(interval)
  }
  else {
    const remaining = new Date(remainingTimeMs)
    // console.log(remaining)
    renderUI(remaining.getMinutes(), remaining.getSeconds())
  }
}

function renderUI(minutes, seconds) {
  const timeRemainingEl = document.getElementById("timeRemaining")
  timeRemainingEl.textContent = `Time Remaining: ${formatTime(minutes)}:${formatTime(seconds)}`
}

function formatTime(time) {
  return time.toString().padStart(2, '0')
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
