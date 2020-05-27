'use strict';

const keys = document.querySelectorAll('.key');

function playKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    //if you push a key without audio the function stops
    return;
  }
  audio.currentTime = 0; //rewind to the start
  audio.play();

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it if it's not a transform

  this.classList.remove('playing');
}

window.addEventListener('keydown', playKey);
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
