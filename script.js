// variables
const button = document.querySelector("button");
const number = document.querySelector(".number");
const quote = document.querySelector(".quote");

// Function for fetch API
const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      // Converts data from api into json
      return data.json();
    })
    .then((completedata) => {
      const id = completedata["slip"].id;
      const advice = completedata["slip"].advice;
      // Test to see if data was pulled from object
      console.log(id, advice);
      // Assigning the object data to DOM elements
      number.textContent = id;
      quote.textContent = advice;
    });
};

// Event Listener that calls the advice function when the button is clicked
button.addEventListener("click", getAdvice);

// Initial call to the getAdvice function that loads advice to the page
getAdvice();