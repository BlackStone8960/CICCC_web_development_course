'use strict';

const charLength = document.getElementById('length');

const getCharLength = (value) => {
  document.getElementById('numberOfCharacter').textContent = value;
};

window.onload = () => {
  getCharLength(charLength.value);
};

