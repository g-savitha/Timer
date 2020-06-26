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
    //automatically invokes the getter function even though we dont have paranthesis at end.
    //treats it as instance variable, coz of 'get' keyword
    // const timeRemaining = this.timeRemaining;
    // this.timeRemaining = timeRemaining - 1;
    //in short
    this.timeRemaining = this.timeRemaining - 1; //left side one calls setter, right side one calls getter;
  };
  pause = () => {
    clearInterval(this.intervalId);
  };
  //getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  //setter
  //time = the value which we provide to set, here timeRemaining - 1;
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");

const timer = new Timer(durationInput, startBtn, pauseBtn);
