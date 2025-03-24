// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Glitch Effect on Header
const glitchText = document.querySelector('.glitch');
setInterval(() => {
    glitchText.style.textShadow = `${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px #FF0070`;
}, 500);
