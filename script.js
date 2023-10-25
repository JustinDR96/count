// Variables globales
let countdownInterval;
const durationInMinutes = 60; // Durée du compte à rebours en minutes
let targetDate = new Date(); // Date de début du compte à rebours
targetDate.setMinutes(targetDate.getMinutes() + durationInMinutes);

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Terminé!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  }
}

document.getElementById("startButton").addEventListener("click", function () {
  countdownInterval = setInterval(updateCountdown, 100);
});

document.getElementById("stopButton").addEventListener("click", function () {
  clearInterval(countdownInterval);
});

// Appel initial pour afficher la durée du compte à rebours
updateCountdown();
