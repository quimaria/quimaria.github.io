// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Countdown Timer
function countdown() {
    const weddingDate = new Date("2025-06-14T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("timer").innerText = `${days} dies!`;
}

// Update countdown every second
setInterval(countdown, 1000);
countdown();
