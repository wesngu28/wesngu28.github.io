'use strict';
(function() {

  /*
   *  Name: Wesley Nguyen
   *  Date: 1/25/2022
   *  Section: CSE154 AC Itani
   *
   *  This is the JS to implement the that builds upon the Komodo Dragon site I
   *  made in CP1.
   */

  window.addEventListener('load', init);
  let activeSlide = 0;

  /**
   *  Init function that runs after the site is loaded and adds associated
   *  events to the buttons within the html and shows the first element of the
   *  lizard table
   */
  function init() {
    let figures = document.getElementsByClassName('lizard');
    figures[0].style.display = "block";

    let back = document.querySelector('.back');
    let forward = document.querySelector('.next');
    back.addEventListener('click', backSlide);
    forward.addEventListener('click', nextSlide);

    let button = document.querySelector('button');
    button.addEventListener('click', displayHabitat);
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

  /**
   *  Function that runs when the Habitat button is clicked, displaying
   *  information about the island of Komodo and then calls changeButton.
   */
  function displayHabitat() {
    let komodoisland = document.createElement("p");
    komodoisland.innerText = "The Komodo Dragon primarily inhabits the island";
    let p2 = " from which it gets its name, the Indonesian island of Komodo.";
    let p3 = " Some other islands that the Komodo Dragon inhabits are the";
    let p4 = " other islands of the Lesser Sunda island chain. Some fun facts";
    let p5 = " about the island of Komodo is that most of the two thousand";
    let p6 = " people that inhabit it are descendants of convicts that were";
    let p7 = " exiled there by the colonial government. Besides the Komodo,";
    let p8 = " other fauna that live here are the the water buffalo, civets";
    let p9 = " and macaques. Another cool fact is that the islands have one";
    let p10 = " of the seven pink beaches in the entire world.";
    p2 = p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10;
    komodoisland.innerText = komodoisland.innerText + p2;

    let islandpic = document.createElement("img");
    islandpic.src = 'img/island.jpg';
    islandpic.alt = 'Hills on the island of Komodo';

    let parent = document.getElementById('habitat');
    parent.append(komodoisland);
    parent.append(islandpic);
    changeButton();
  }

  /**
   *  Function that runs when the altered habitat button is clicked again,
   *  hiding the information that was displayed in displayHabitat, and calls
   *  changeButton.
   */
  function hideHabitat() {
    let parent = document.getElementById('habitat');
    let para = parent.querySelector('p');
    let img = parent.querySelector('img');
    para.remove();
    img.remove();
    changeButton();
  }

  /**
   *  Function that changes the text of the button and alters the event
   *  listener to one of the two above functions based on the text.
   */
  function changeButton() {
    let button = document.querySelector('button');
    if (button.innerText === "Hide Information") {
      button.innerText = "Click for Habitat Information";
      button.removeEventListener('click', hideHabitat);
      button.addEventListener('click', displayHabitat);
    } else {
      button.innerText = "Hide Information";
      button.removeEventListener('click', displayHabitat);
      button.addEventListener('click', hideHabitat);
    }
  }

})();