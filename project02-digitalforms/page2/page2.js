const singlePattern = document.getElementById('pattern0');
const patternGrid = document.querySelector('.pattern-grid');
const patterns = document.querySelectorAll('.pattern-grid .pattern');

const patternImages = [
    "assets/pattern1.png",
    "assets/pattern2.png",
    "assets/pattern3.png",
    "assets/pattern4.png"
];

let currentPatternIndex = 0;

singlePattern.addEventListener("click", () => {
    singlePattern.style.display = 'none';
    patternGrid.style.display = 'grid';
});

patterns.forEach(pattern => {
    pattern.addEventListener("click", () => {
        currentPatternIndex = (currentPatternIndex + 1) % patternImages.length;

        patterns.forEach(p => {
            p.src = patternImages[currentPatternIndex];
        });
    });
});
