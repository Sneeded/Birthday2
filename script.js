// Special birthday message
function revealMessage() {
    const messageElement = document.getElementById('birthday-message');
    messageElement.textContent = "You are loved beyond words, cherished beyond measure, and celebrated every moment!";
}

// Countdown to midnight
function countdownToMidnight() {
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0); // Set to midnight
    const timeLeft = nextMidnight - now;

    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById('countdown').textContent = `Time to midnight: ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(countdownToMidnight, 1000);

// Play and stop background music
let music;
function playMusic() {
    if (!music) {
        music = new Audio('https://www.bensound.com/bensound-music/bensound-birthday.mp3');
    }
    music.loop = true;
    music.play();
}

function stopMusic() {
    if (music) {
        music.pause();
    }
}
