'use strict';

//SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//STARTINGT CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

currentScore=0;

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
    currentScore+= dice;

  } else {
    //SWITCH TO NEXT PLAYER

  }
});
