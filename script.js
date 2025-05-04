const eventDate = new Date('2025-05-14T19:00:00').getTime();

const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const alarmSound = document.getElementById('alarmSound');
const backgroundMusic = document.getElementById('backgroundMusic');

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown-container').innerHTML = "It's time to celebrate!";
        backgroundMusic.pause(); // Background music stop
        alarmSound.play();       // Alarm bajana start
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysSpan.innerText = days;
    hoursSpan.innerText = hours;
    minutesSpan.innerText = minutes;
    secondsSpan.innerText = seconds;
}, 1000);
