function updateCountdown() {
    const countdownElement = document.getElementById('clock');
    const videoLink = document.getElementById('video-link');
    const targetDate = new Date('2023-12-26T12:00:00'); // Ditt ursprungliga måldatum


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
