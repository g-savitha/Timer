class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick;
    //for a smoother animation, run it for every 50ms
    this.intervalId = setInterval(this.tick, 20);
  };
  tick = () => {
    //stop the timer when it hits 0, else continue
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };
  pause = () => {
    clearInterval(this.intervalId);
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2); //rounds the decimal to 2 decimal places
  }
}
