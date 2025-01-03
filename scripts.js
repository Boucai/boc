let confettiInterval;

function showSurprise() {
    var surprise = document.getElementById('surprise');
    if (surprise.style.display === 'none') {
        surprise.style.display = 'block';
        createConfetti();
    } else {
        surprise.style.display = 'none';
        clearInterval(confettiInterval);
    }
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    confettiInterval = setInterval(() => {
        for (let i = 0; i < 10; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.backgroundColor = getRandomColor();
            confettiContainer.appendChild(confetti);
        }
    }, 300);

    setTimeout(() => {
        clearInterval(confettiInterval);
        confettiContainer.remove();
    }, 30000); // 设置为30秒
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
