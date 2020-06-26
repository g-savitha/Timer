class Timer {
  constructor(durationInput, startBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }
  start = () => {
    this.tick; // run 1 tick to coverup 1 sec delay to start
    //assign timer variable to `this` so we can access it across other methods
    this.intervalId = setInterval(this.tick, 1000);
  };
  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  };
  pause = () => {
    clearInterval(this.intervalId);
  };
}

const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");

const timer = new Timer(durationInput, startBtn, pauseBtn);
