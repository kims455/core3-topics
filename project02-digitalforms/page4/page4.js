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
