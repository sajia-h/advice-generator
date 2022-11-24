//query selector
generateQuote();

const dice = document.querySelector('.button');
dice.addEventListener('click', generateQuote);

/* Note: data was arbitrarily named. You can name it whatever you want. 
data is the value returned from fetch(). */

  function generateQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('advice-no').innerHTML = data.slip.id;
      document.getElementById('quote').innerHTML = data.slip.advice;
    });
  }

