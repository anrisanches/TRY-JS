// console.log('PROMISE');

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Promise is performed successfully(performed, fulfilled)');
//     }

//     reject('Promise is performed with error (rejected)');
//   }, 2000);
// });

// promise.then(
//     result => {
//     console.log(result,'22');
//   },
//   error => {
//     console.log(error);
//   }
// );

// promise.then(onSuccess, onError);

// function onSuccess (result) {
//     console.log(result,'22');
// }
// function onError (error) {
//     console.log(error,'404');
// }

//promise-for-function
function makeDish(dish) {
  const DELAY = 1000;

  const promiseDish = new Promise((resolve, reject) => {
    const isResolve = Math.random() > 0.5;

    setTimeout(() => {
      if (isResolve) {
        resolve(`here is your order - ${dish}`);
      } else {
        reject(`You order ${dish} - is 404`);
      }
    }, DELAY);
  });

  return promiseDish;
}

// makeDish('bread')
//   .then(onSuccessResult)
//   .catch(onErrorResult)
//   .finally(console.log('You are welcome'));

function onSuccessResult(successes) {
  console.log(successes, 'successes');
}

function onErrorResult(error) {
  console.log(error, 'error');
}

const makePizza = pizza => Promise.resolve(`Here your pizza - ${pizza}`);

// makePizza('meat').then(onSuccessPizza);

function onSuccessPizza(success) {
  console.log(success, '-----------success');
}
//-----------------------------------
const horses = ['Mango', 'Poly', 'Ajax', 'Kate', 'Natasha'];
let iter = null;

const refs = {
  btnRace: document.querySelector('.js-btn-race'),
  winner: document.querySelector('.winner'),
  progress: document.querySelector('.progress'),
  table: document.querySelector('.js-results-table > tbody'),
};

refs.btnRace.addEventListener('click', onBtnRaceClick);

// const promises = horses.map(runHorse);
// console.log(promises);
// Promise.race(promises).then(horse=>console.log(horse));

// Promise.race(promises).then(({ horse, timeRase }) => {console.log(`%c winner ${horse} time - ${timeRase}`, 'color: red; font-size: 14px;',)});

// Promise.all(promises).then((horses)=>{console.log(horses)})

function runHorse(horse) {
  return new Promise((resolve, reject) => {
    const timeRase = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, timeRase });
    }, timeRase);
  });
}

function onBtnRaceClick() {
  const promises = horses.map(runHorse);
  refs.winner.textContent = ''
  iter +=1;

  Promise.race(promises).then(({ horse, timeRase }) => {
    refs.winner.textContent = `%c Winner ${horse} time - ${timeRase}`, 'color: red; font-size: 14px;'

    updateResultsTable({ horse, timeRase, iter })
  });

  refs.progress.textContent = 'Race is starting ----- > bids are not accepted';

  Promise.all(promises).then((horses)=>{refs.progress.textContent = 'Rase is END'})
}

function updateResultsTable ({horse,timeRase,iter}) {
  const tr = `<tr><td>${iter}</td><td>${horse}</td><td>${timeRase}</td></tr>`;
    refs.table.insertAdjacentHTML('beforeend', tr)
}
// runHorse('Mango').then(success => console.log(success));

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
