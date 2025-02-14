function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
}

setInterval(createFallingHeart, 300);