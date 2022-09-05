mtg = document.querySelector("#MTG");
Portfolio = document.querySelector("#Portfolio");

img = document.querySelector("#Img");

imgTitle = document.querySelector("#img-Title");

mtgText = document.querySelector("#MTG-Text")




document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });


  mtgText.addEventListener("click", function () {
    imgTitle.textContent = ("MTG-Deck-Builder");
    mtg.classList.add('is-active');
    Portfolio.classList.remove('is-active');

  })

 