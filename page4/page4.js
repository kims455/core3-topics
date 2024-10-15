$(document).ready(function() {
    function createStackImages() {
        for (let i = 1; i <= 55; i++) {
            let $img = $('<img>', {
                src: `assets/resized${i}.webp`,
                alt: `Resized Manhole image ${i}`,
                loading: 'lazy'
            });

            const angle = (i / 55) * (Math.PI * 2);
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            $img.css({
                transform: `translate(${x}px, ${y}px)`
            });

            $('.stack').append($img);

            $img.on('click', function() {
                showGallery();
            });
        }
    }

    function showGallery() {
        $('.stack').hide();
        $('.gallery').empty().show().css('display', 'grid');

        for (let j = 1; j <= 55; j++) {
            let $galleryImg = $('<img>', {
                src: `assets/trimmed${j}.webp`,
                alt: `Gallery Manhole image ${j}`,
                loading: 'lazy'
            });
            
            $('.gallery').append($galleryImg);
        }
    }

    function initializeImages() {
        $('.stack img').each(function(index) {
            $(this).delay(index * 100).animate({ opacity: 1 }, 300);
        });
    }

    createStackImages();
    initializeImages();
});



















$(document).ready(function() {
    const coordinatesData = [
        { coords: '40.74854° N, 73.98912° W', image: 'assets/trimmed1.webp' },
        { coords: '40.73210° N, 73.99790° W', image: 'assets/trimmed2.webp' },
        { coords: '40.71033° N, 73.99389° W', image: 'assets/trimmed3.webp' },
        { coords: '40.76568° N, 73.97340° W', image: 'assets/trimmed4.webp' },
        // Add all 55 coordinates here...
    ];

    // Create stack images
    function createStackImages() {
        for (let i = 1; i <= 55; i++) {
            let $img = $('<img>', {
                src: `assets/resized${i}.webp`,
                alt: `Resized Manhole image ${i}`,
                loading: 'lazy'
            });

            const angle = (i / 55) * (Math.PI * 2);
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            $img.css({
                transform: `translate(${x}px, ${y}px)`
            });

            $('.stack').append($img);

            // On click, show the gallery
            $img.on('click', function() {
                showGallery();
                showCoordinates(i); // Show coordinates for the clicked image
            });

            // Animation on hover: manholes move randomly
            $img.on('mouseenter', function() {
                randomManholeMovement();
            });
        }
    }

    // Show gallery when a manhole is clicked
    function showGallery() {
        $('.stack').hide();
        $('.gallery').empty().show().css('display', 'grid');

        for (let j = 1; j <= 55; j++) {
            let $galleryImg = $('<img>', {
                src: `assets/trimmed${j}.webp`,
                alt: `Gallery Manhole image ${j}`,
                loading: 'lazy'
            });

            $('.gallery').append($galleryImg);
        }
    }

    // Show coordinates on click
    function showCoordinates(index) {
        const coordinatesDisplay = $('.coordinates-display');
        coordinatesDisplay.text(coordinatesData[index - 1].coords);
        coordinatesDisplay.fadeIn(300);
        setTimeout(() => {
            coordinatesDisplay.fadeOut(300);
        }, 3000);  // Hide after 3 seconds
    }

    // Randomly move manholes around the screen
    function randomManholeMovement() {
        for (let i = 0; i < 5; i++) {
            let randomManhole = $('<div class="manholes-moving"></div>');
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            const randomImage = `assets/resized${Math.floor(Math.random() * 55) + 1}.webp`;  // Pick random image

            randomManhole.css({
                left: randomX + 'px',
                top: randomY + 'px',
                backgroundImage: `url(${randomImage})`,
                opacity: 1
            });

            $('body').append(randomManhole);

            // Animate the manhole moving across the screen
            randomManhole.animate({
                left: randomX + Math.random() * 100 - 50 + 'px',
                top: randomY + Math.random() * 100 - 50 + 'px'
            }, 1000, function() {
                randomManhole.remove(); // Remove after animation
            });
        }
    }

    // Initialize stack images
    createStackImages();

    // Initialize stack images with fade-in effect
    $('.stack img').each(function(index) {
        $(this).delay(index * 100).animate({ opacity: 1 }, 300);
    });
});
