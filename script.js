document.getElementById('responseBtn').addEventListener('click', function() {
    document.getElementById('responseText').textContent = 'Yes, Mawi! I can\'t wait to spend the day with you ❤️';
});
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    // Set the heart's starting position and size randomly
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Falling duration between 2 and 5 seconds
    heart.style.width = heart.style.height = Math.random() * 10 + 10 + 'px'; // Size between 10px and 20px

    // Apply the falling animation
    heart.style.animationName = 'fall';
    heart.style.animationTimingFunction = 'linear';
    heart.style.animationIterationCount = 'infinite';

    // Add the heart to the body
    document.body.appendChild(heart);

    // Remove the heart after it falls to keep the DOM clean
    setTimeout(() => {
        heart.remove();
    }, 5000); // Match this to the longest possible animation duration
}

// Create a new heart every 300 milliseconds
setInterval(createHeart, 300);
