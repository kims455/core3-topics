document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".manhole-text").style.animation = "fadeText 5s ease-in-out forwards";
});

$(document).ready(function() {
    $('#flipbookImage').on('click', function() {
        $('.text-container').toggleClass('visible');
    });
});