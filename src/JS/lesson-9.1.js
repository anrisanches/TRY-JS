import { getTimeComponents } from './helpers/helpers9.1';
import { pad } from './helpers/helpers9.1';
// const containerRef = document.querySelector('.container');
// const a = 'FUCK'
// console.log('1');
// const timerId = setTimeout((a)=>{console.log(a);}, 1100, a)
// clearTimeout(timerId)
// setTimeout(()=>{console.log('3');}, 1000)
// console.log('4');

// const date = new Date();

// console.log(typeof date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(typeof date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));//15sec
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
// console.log(new Date().getTime());

// console.log(new Date(2035,10,2,14,8,36,5));

//---------------------------------------------------------------------------

const refs = {
  clockFace: document.querySelector('.js-clockFace'),
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  saveTime: document.querySelector('.js-clockFace-save'),
};

refs.clockFace.textContent = '00:00:00';

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    const startTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const calculateTime = currentTime - startTime;
      const timeComponents = getTimeComponents(calculateTime);
      const time = timeComponents;
      // const {hours,mins,secs} = timeComponents;//spread with result fn
      // console.log(`${hours}:${mins}:${secs}`);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    refs.clockFace.textContent = '00:00:00';
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}
// const timer = {
//   intervalId: null,
//   isActive: false,
//     start(){
//       if (this.isActive) {
//         return
//       }

//       this.isActive = true;
//        const startTime = Date.now()

//        this.intervalId = setInterval(() => {
//         const currentTime = Date.now()
//         const calculateTime = currentTime - startTime;
//         const timeComponents = getTimeComponents(calculateTime);
//         const {hours,mins,secs} = timeComponents;//spread with result fn
//         // console.log(`${hours}:${mins}:${secs}`);

//         updateClockFace({hours,mins,secs})
//        }, 1000);
//     },

//     stop(){
//       clearInterval(this.intervalId)
//       this.isActive = false
//     }
// };

const timerClass = new Timer({
  onTick: updateClockFace,
});

refs.startBtn.addEventListener('click', timerClass.start.bind(timerClass));

refs.stopBtn.addEventListener('click', () => {
  JSON.stringify(localStorage.setItem('stop-timer', refs.clockFace.textContent));
  savedTimer();
  timerClass.stop();
});

function updateClockFace({ hours, mins, secs }) {
  refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function savedTimer() {
  const json = localStorage.getItem('stop-timer');
  refs.saveTime.textContent = json;
  localStorage.removeItem('stop-timer')
}

