'use strict';

function playSound(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function clickSound(clickedKey) {
  var audio = document.querySelector('audio[data-key="' + clickedKey + '"]');
  var key = document.querySelector('.key[data-key="' + clickedKey + '"]');
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);

function clicked() {
  var datakey = this.getAttribute('data-key');
  clickSound(datakey);
}

keys.forEach(function (key) {
  return key.addEventListener('click', clicked);
});

