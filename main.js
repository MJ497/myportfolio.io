const body = document.querySelector('body'),
nav = body.querySelector('.navi'),
open = body.querySelector('.open2'),
close = body.querySelector('.close');

open.addEventListener( 'click',()=>{
nav.classList.toggle('small');
}) ;



// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");
 
// Get the close button element
var span = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission (you may need to add AJAX or other logic here)
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Add your logic to handle the form submission here
  // For example, you can use JavaScript to send the form data to your server
  // and display a success message to the user.
  // Then, close the modal if needed.
  modal.style.display = "none";
});


document.addEventListener('DOMContentLoaded', function () {
  var targetSections = document.querySelectorAll('.target-section');

  window.addEventListener('scroll', function () {
    targetSections.forEach(function (targetSection) {
      var targetSectionPosition = targetSection.getBoundingClientRect().top;
      var triggerOffset = 100;

      if (targetSectionPosition < window.innerHeight - triggerOffset) {
        targetSection.classList.add('animate__fadeInDown');
      } else {
        targetSection.classList.remove('animate__fadeInDown');
      }
    });
  });
});



// let circularProgress = document.getElementsByClassName("circular-progress"),
//   progressValue = document.getElementsByClassName("progress-value")
// ;

// let progressStartValue =  0,
//    progressEndValue = 90,
//    speed  = 63;

//    let progress = setInterval(() => {
//     progressStartValue++;

//     progressValue.textContent = `${progressStartValue}%`
//     circularProgress.style.background = `conic-gradient(var(--secondary-color) ${progressStartValue * 3.6}deg, rgba(57, 88, 134, 0.1) 0deg   )`

//     if(progressStartValue == progressEndValue){
//       clearInterval(progress);
//     }
    
//    },speed);
// let circularProgress = document.querySelectorAll(".circular-progress"),
//   progressValue = document.querySelectorAll(".progress-value");

// let progressStartValue = 0,
//   progressEndValue = 90,
//   speed = 63;

// let progress = setInterval(() => {
//   progressStartValue++;

//   progressValue.forEach((element) => {
//     element.textContent = `${progressStartValue}%`;
//   });

//   circularProgress.forEach((element) => {
//     element.style.background = `conic-gradient(var(--secondary-color) ${progressStartValue * 3.6}deg, rgba(57, 88, 134, 0.1) 0deg)`;
//   });

//   if (progressStartValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);

// Define an array with progress bar settings
