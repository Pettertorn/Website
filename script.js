function updateCountdown() {
    const countdownElement = document.getElementById('clock');
    const targetDate = new Date('2023-12-26T12:00:00'); // Set target date and time
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      
        countdownElement.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    } else {
        
        countdownElement.innerHTML = "Dags för enkla 3 chests with the boys";
    }
}


setInterval(updateCountdown, 1000);
