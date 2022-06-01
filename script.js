// variables
const button = document.querySelector('button');
const number = document.querySelector('.number');
const quote = document.querySelector('.quote');

// fetch API
fetch('https://api.adviceslip.com/advice')
  .then(data => {
    // Converts data into json
    return data.json();
  })
  .then(completedata => {

    const id = completedata["slip"].id;
    const advice = completedata["slip"].advice;
    // Test to see if data was pulled from object
    console.log(id,advice);
    // Assigning the object data to DOM elements
    number.textContent = id;
    quote.textContent = advice;
    // Event Listener to refresh page when button is clicked
    button.addEventListener('click', () => {
      location.reload();
    });
  });

