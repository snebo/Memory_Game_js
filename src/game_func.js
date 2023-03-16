//add the card classes to an arrary
const cards = document.querySelectorAll('.memory_class');
let has_flipped_card = false;
let timer = false;
let first_card, second_card;
//flip the cards
function flipCard() {
    if (timer) return;
    if (this === first_card) return;
    //console.log("flipping");
    // console.log(this)
    this.classList.add('flip');

    if (!has_flipped_card) {

        has_flipped_card = true;
        first_card = this;
        return;
    }

    has_flipped_card = false;
    second_card = this;

    //check if they match
    checkForMatch();
}

function checkForMatch() {
    let ismatch = first_card.dataset.name === second_card.dataset.name;
    ismatch ? disableCards() : unflip();
    //if ismatch is true, do that, else do whats after the :
}

function disableCards() {
    first_card.removeEventListener('click', flipCard);
    second_card.removeEventListener('click', flipCard);

    resetBoard();
}

function unflip() {
    timer = true
    setTimeout(() => {
        first_card.classList.remove('flip');
        second_card.classList.remove('flip');
        timer = false;
    }, 1500);
}

function resetBoard() {
    [has_flipped_card, timer] = [false, false];
    [first_card, second_card] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let random_pos = Math.floor(Math.random() * 12);
        card.style.order = random_pos;
    });
})();
//wrapping a func like this make it immediatekly invoked

//check which acard is clicked
cards.forEach(card => card.addEventListener('click', flipCard));