'use strict';
(function() {
  window.addEventListener('load', init);
  let activeSlide = 0;

  function init() {
    startTime();
    let resume = document.getElementById('resume');
    resume.addEventListener('click', hideAll);
    let figures = document.getElementsByClassName('lizard');
    figures[0].style.display = "block";

    let back = document.querySelector('.back');
    let forward = document.querySelector('.next');
    back.addEventListener('click', backSlide);
    forward.addEventListener('click', nextSlide);
  }

  function hideAll() {
    let resumeHold = document.querySelector('#resumes');
    while (resumeHold.firstChild) {
      resumeHold.removeChild(resumeHold.firstChild);
    }
    let komodo = document.querySelector('#komodo');
    komodo.classList.add('hidden');
    let table = document.querySelector('#monitor-table');
    table.classList.add('hidden');
    let resume = document.createElement('iframe');
    resume.src = "Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0";
    resumeHold.appendChild(resume);
    let goBack = document.createElement('button');
    goBack.textContent = 'Click to go back.'
    resumeHold.appendChild(goBack);
    let resumeButton = document.getElementById('resume');
    resumeButton.disabled = true;
    goBack.addEventListener('click', returnHome);
  }

  function returnHome() {
    let komodo = document.querySelector('#komodo');
    komodo.classList.remove('hidden');
    let table = document.querySelector('#monitor-table');
    table.classList.remove('hidden');
    let resume = document.querySelector('#resumes');
    resume.classList.add('hidden');
    let resumeButton = document.getElementById('resume');
    resumeButton.disabled = false;
  }

  /** Function called when the back button is clicked to go back a slide*/
  function backSlide() {
    displaySlide(activeSlide += -1);
  }

  /** Function called when the next button is clicked to go forward a slide*/
  function nextSlide() {
    displaySlide(activeSlide += 1);
  }

  /**
   *  Function to display the slide. It gets figures with the class lizard
   *  and runs checks for if the passed integer value is greater than the
   *  length, and if it is, sets it to zero. If it is greater, it sets it
   *  to the highest value. It then runs a loop that hides all the elements
   *  before showing the one of the index.
   *  @param {float} index - Passed value for accessing the created list
   */
  function displaySlide(index) {
    let count = 0;

    let figures = document.getElementsByClassName('lizard');
    if (index > figures.length - 1) {
      activeSlide = 0;
    }
    if (index < 0) {
      activeSlide = figures.length - 1;
    }
    for (count = 0; count < figures.length; count++) {
      figures[count].style.display = "none";
    }

    figures[activeSlide].style.display = "block";
  }

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clock.textContent =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }

})();