// Write your code here
const images = [
    "https://i.picsum.photos/id/363/500/300.jpg?hmac=LZnmPmpU0TqF3LE_p3fn--rmS-Qwlc3pXmBS-Aax_2k",
    "https://i.picsum.photos/id/873/500/300.jpg?hmac=MaOLNl8Rq7sIFnpBxV3uQew2CnvIrLwwemAL0x2m3Ro",
    "https://i.picsum.photos/id/986/500/300.jpg?hmac=VNdFf-SwoXXp9atenZEY4ONnQq4p6sv2aSBazDbzpFA",
    "https://i.picsum.photos/id/404/500/300.jpg?hmac=Ahiv5FvBIWej0gwMR4rBSjLtQ6kbOyd6zblZ8cxGbF0"
  ]
  let imgIndex = 0;
  let intervalRef;
  let delayInMs = 1000;
  let currentFn;
  
  const carousselEl = document.createElement("div")
  const buttonsEl = document.createElement("div")
  
  const imgEl = document.createElement("img")
  
  const backBtn = document.createElement("button")
  backBtn.textContent = "Back"
  backBtn.addEventListener("click", moveBackwards)
  
  const autoBackBtn = document.createElement("button")
  autoBackBtn.textContent = "Auto Back"
  autoBackBtn.addEventListener("click", moveBackwardsAuto)
  
  const nextBtn = document.createElement("button")
  nextBtn.textContent = "Forward"
  nextBtn.addEventListener("click", moveForwards)
  
  const autoNextBtn = document.createElement("button")
  autoNextBtn.textContent = "Auto Forward"
  autoNextBtn.addEventListener("click", moveForwardsAuto)
  
  const stopBtn = document.createElement("button")
  stopBtn.textContent = "Stop"
  stopBtn.addEventListener("click", stop)
  
  const animationDelayEl = document.createElement("input")
  animationDelayEl.placeholder = "Delay in ms (1000ms by default)"
  animationDelayEl.addEventListener("change", updateDelayTime)
  
  buttonsEl.appendChild(autoBackBtn)
  buttonsEl.appendChild(backBtn)
  buttonsEl.appendChild(stopBtn)
  buttonsEl.appendChild(nextBtn)
  buttonsEl.appendChild(autoNextBtn)
  buttonsEl.appendChild(animationDelayEl)
  
  carousselEl.appendChild(imgEl)
  carousselEl.appendChild(buttonsEl)
  
  document.body.appendChild(carousselEl)
  
  function showImage() {
    imgEl.src = images[imgIndex]
  }
  
  function moveBackwards() {
    imgIndex = (imgIndex == 0) ? images.length-1 : imgIndex - 1 
    showImage()
  }
  
  function moveBackwardsAuto() {
    resetInterval(moveBackwards)
  }
  
  function moveForwards() {
    imgIndex = (imgIndex == images.length-1) ? 0 : imgIndex + 1 
    showImage()
  }
  
  function moveForwardsAuto() {
    resetInterval(moveForwards)
  }
  
  function stop() {
    resetInterval()
  }
  
  function updateDelayTime(ev) {
    delayInMs = ev.target.value
    resetInterval(currentFn)
  }
  
  function resetInterval(fn) {
    if (intervalRef) clearInterval(intervalRef)
    if (typeof fn === "function") {
      currentFn = fn
      intervalRef = setInterval(fn, delayInMs)
    }
  }
  
  showImage()
