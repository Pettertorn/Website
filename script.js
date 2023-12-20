function updateCountdown() {
    const countdownElement = document.getElementById('clock');
    const targetDate = new Date('2023-12-26T12:00:00'); // Set target date and time
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Output the result in an element with id="clock"
        countdownElement.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    } else {
        // If the countdown is over, write some text 
        countdownElement.innerHTML = "Dags för enkla 3 chests with the boys";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
