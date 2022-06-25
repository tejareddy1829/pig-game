'use strict';

//SELECTING ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//STARTINGT CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//ROLL DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  //1. GENERATING RANDOM DICEROLL
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. DISPLAY DICE
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. CHECK FOR ROLL 1
  if (dice !== 1) {
    //ADD DICE TO CURRENT SCORE
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //SWITCH TO NEXT PLAYER
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //1.ADD CURRENT SCORE TO ACTIVE PLAYER
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];

  //2.CHECK IF PLAYER SCORE>=100
  //FINISH THE GAME

  //SWITCH PLAYER
  switchPlayer();
});
