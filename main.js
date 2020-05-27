'use strict';

function playKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  if (!audio) {  //if you push a key without audio the function stops
    return;
  }
  audio.currentTime = 0; //rewind to the start
  audio.play();
}

window.addEventListener('keydown', playKey);
