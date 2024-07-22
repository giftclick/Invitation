   // Get the modal
   var modal = document.getElementById("myModal");

   // Get the button that opens the modal
   var btn = document.getElementById("openModalBtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

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

document.addEventListener('DOMContentLoaded', function() {
  const countdownDate = new Date('August 31, 2024 12:00:00').getTime();

  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.textContent = days.toString().padStart(2, '0');
      hoursElement.textContent = hours.toString().padStart(2, '0');
      minutesElement.textContent = minutes.toString().padStart(2, '0');
      secondsElement.textContent = seconds.toString().padStart(2, '0');

      if (distance < 0) {
          clearInterval(interval);
          daysElement.textContent = '00';
          hoursElement.textContent = '00';
          minutesElement.textContent = '00';
          secondsElement.textContent = '00';
          // Puedes agregar un mensaje o realizar otra acción cuando se complete la cuenta regresiva
      }
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Llamar inmediatamente para evitar el retraso inicial
});
