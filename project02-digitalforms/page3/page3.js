const images = Array.from({ length: 10 }, (_, i) => `assets/manhole${i + 1}.webp`);
let cardsArray = [...images, ...images].sort(() => 0.5 - Math.random());

let flippedCards = [];
let attempts = 0;
let matches = 0;

function createBoard() {
    $('#game-board').empty();
    attempts = 0;
    matches = 0;
    flippedCards = [];
    updateDisplay();

    cardsArray.forEach(img => {
        const card = createCardElement(img);
        $('#game-board').append(card);
    });

    setTimeout(() => {
        $('.card').addClass('flipped');

        setTimeout(() => {
            $('.card').removeClass('flipped');
        }, 2000);
    }, 500);
}

function createCardElement(img) {
    const card = $(`
        <div class="card" data-image="${img}">
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back" style="background-image: url(${img})"></div>
            </div>
        </div>
    `);
    card.on('click', flipCard);
    return card;
}

function flipCard() {
    const $this = $(this);
    if (flippedCards.length < 2 && !$this.hasClass('flipped')) {
        $this.addClass('flipped');
        flippedCards.push($this);
        if (flippedCards.length === 2) checkForMatch();
    }
}

function checkForMatch() {
    attempts++;
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.data('image') === secondCard.data('image')) {
        matches++;
        flippedCards = [];
        if (matches === images.length) {
            setTimeout(() => alert('Congratulations! You found all the matches and explored the designs of 10 manholes :)'), 200);
        }
    } else {
        setTimeout(() => {
            firstCard.removeClass('flipped');
            secondCard.removeClass('flipped');
            flippedCards = [];
        }, 1000);
    }
    updateDisplay();
}

function updateDisplay() {
    $('#attempts').text(attempts);
    $('#matches').text(matches);
}

$('#restart-button').on('click', () => {
    cardsArray = [...images, ...images].sort(() => 0.5 - Math.random());
    createBoard();
});

createBoard();