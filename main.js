// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  const likeGlyph = document.querySelector('.like-glyph');

  likeGlyph.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {

        // Success response from the server
        if (likeGlyph.innerText === EMPTY_HEART) {
          likeGlyph.innerText = FULL_HEART;
          likeGlyph.classList.add('activated-heart');
        } else {
          likeGlyph.innerText = EMPTY_HEART;
          likeGlyph.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        
        // Failure response from the server
        errorModal.classList.remove('hidden');
        const errorMessage = document.getElementById('modal-message');
        errorMessage.innerText = `Error: ${error}`;
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
