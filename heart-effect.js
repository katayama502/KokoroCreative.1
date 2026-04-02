document.addEventListener('mousedown', (e) => {
    const heartCount = 8;
    const colors = ['#000', '#fff'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        
        // Randomly pick black or white
        const isWhite = Math.random() > 0.5;
        const fillColor = isWhite ? '#fff' : '#000';
        const strokeColor = isWhite ? '#000' : '#fff';
        
        heart.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${fillColor}" stroke="${strokeColor}" stroke-width="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        `;
        
        // Random destination coordinates
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const destX = Math.cos(angle) * distance;
        const destY = Math.sin(angle) * distance;
        const rotation = Math.random() * 360;
        
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;
        heart.style.setProperty('--x', `${destX}px`);
        heart.style.setProperty('--y', `${destY}px`);
        heart.style.setProperty('--r', `${rotation}deg`);
        
        document.body.appendChild(heart);
        
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});
