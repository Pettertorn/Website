function updateCountdown() {
    const countdownElement = document.getElementById('clock');
    const videoLink = document.getElementById('video-link');
    const targetDate = new Date(new Date().getTime() + 10000); // Nuvarande tid plus 10 sekunder

    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
        // ... Countdown logic ...
    } else {
        countdownElement.innerHTML = "The countdown is over!";
        videoLink.style.display = "block"; // Show the link
    }
}

setInterval(updateCountdown, 1000);
