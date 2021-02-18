'use strict';

const allRightArrows = document.getElementsByClassName('right-arrow');
const allLeftArrows = document.getElementsByClassName('left-arrow');
const allBottomArrows = document.getElementsByClassName('bottom-arrow');
const allTopArrows = document.getElementsByClassName('top-arrow');  
const numberOfPages = document.getElementsByClassName('section');

const getPagePositions = () => {
  let rightArrow = document.getElementsByClassName('center')[0].getElementsByClassName('right-arrow')[0];
  let leftArrow = document.getElementsByClassName('center')[0].getElementsByClassName('left-arrow')[0];
  let bottomArrow = document.getElementsByClassName('center')[0].getElementsByClassName('bottom-arrow')[0];
  let topArrow = document.getElementsByClassName('center')[0].getElementsByClassName('top-arrow')[0];  

  const topPage = document.getElementsByClassName('top');
  const rightPage = document.getElementsByClassName('right');
  const leftPage = document.getElementsByClassName('left');
  const bottomPage = document.getElementsByClassName('bottom');

  const pageAndArrow = [{
    page: topPage[0],
    arrow: topArrow
  }, {
    page: rightPage[0],
    arrow: rightArrow
  }, {
    page: leftPage[0],
    arrow: leftArrow
  }, {
    page: bottomPage[0],
    arrow: bottomArrow
  }];

  pageAndArrow.forEach((direction) => {
    setArrow(direction);
  });
};

const setArrow = (direction) => {
  const classOfArrow = direction.arrow.classList;
  if (direction.page) {
    if (classOfArrow.contains('hidden') === true) {
      classOfArrow.remove('hidden');
    }
  
    const centeredPage = document.getElementsByClassName('center')
    let arrowText = direction.arrow.getElementsByClassName('arrow-text')[0];
    switch (direction.page.id) {
      case 'about' :
        arrowText.innerText = 'ABOUT';
        break;
      case 'skills' :
        arrowText.innerText = 'SKILLS';
        break;
      case 'works' :
        arrowText.innerText = 'WORKS';
        break;
      case 'contact' :
        arrowText.innerText = 'CONTACT';
        break;
      default:
        console.log("Couldn't find a page.");
    }  
  } else if (classOfArrow.contains('hidden') === false) {
    classOfArrow.add('hidden');
    return;
  }
};

getPagePositions();

const rightTransition = () => {
  let leftPage = document.getElementsByClassName('left');
  leftPage[0].classList.add('space');
  leftPage[0].classList.remove('left');

  let centeredPage = document.getElementsByClassName('center');
  centeredPage[0].classList.add('left');
  centeredPage[0].classList.remove('center');

  let rightPage = document.getElementsByClassName('right');
  rightPage[0].classList.add('center');
  rightPage[0].classList.remove('right');

  let pageInSpace = document.getElementsByClassName('space');
  pageInSpace[0].classList.add('right');
  pageInSpace[0].classList.remove('space');

  getPagePositions();
};

const leftTransition = () => {
  let rightPage = document.getElementsByClassName('right');
  rightPage[0].classList.add('space');
  rightPage[0].classList.remove('right');

  let centeredPage = document.getElementsByClassName('center');
  centeredPage[0].classList.add('right');
  centeredPage[0].classList.remove('center');

  let leftPage = document.getElementsByClassName('left');
  leftPage[0].classList.add('center');
  leftPage[0].classList.remove('left');

  let pageInSpace = document.getElementsByClassName('space');
  pageInSpace[0].classList.add('left');
  pageInSpace[0].classList.remove('space');

  getPagePositions();
};

const bottomTransition = () => {
  let centeredPage = document.getElementsByClassName('center');
  centeredPage[0].classList.add('top');
  centeredPage[0].classList.remove('center');

  let bottomPage = document.getElementsByClassName('bottom');
  bottomPage[0].classList.add('center');
  bottomPage[0].classList.remove('bottom');

  getPagePositions();
};

const topTransition = () => {
  let centeredPage = document.getElementsByClassName('center');
  centeredPage[0].classList.add('bottom');
  centeredPage[0].classList.remove('center');

  let topPage = document.getElementsByClassName('top');
  topPage[0].classList.add('center');
  topPage[0].classList.remove('top');

  getPagePositions();
};

for (let i = 0; i < numberOfPages.length; i++) {
  allRightArrows[i].addEventListener('click', rightTransition);
  allLeftArrows[i].addEventListener('click', leftTransition);
  allBottomArrows[i].addEventListener('click', bottomTransition);
  allTopArrows[i].addEventListener('click', topTransition);
}