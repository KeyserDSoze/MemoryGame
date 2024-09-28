const gameContainer = document.getElementById('memory-game');
const restartButton = document.getElementById('restart-button');
const winMessage = document.getElementById('win-message');

// Valori delle carte (devono essere duplicati per avere le coppie)
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cardsArray = [...cardValues, ...cardValues]; // Duplico le carte

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchesFound = 0; // Tiene traccia delle coppie trovate

// Funzione per mescolare l'array di carte
function shuffle(array) {
    array.sort(() => 0.5 - Math.random());
}

// Funzione per creare le carte
function createCards() {
    // Svuota il contenitore delle carte
    gameContainer.innerHTML = '';
    matchesFound = 0;
    winMessage.style.display = 'none';

    shuffle(cardsArray);
    
    cardsArray.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.value = value;

        // Front face (contenuto della carta)
        const frontFace = document.createElement('div');
        frontFace.classList.add('front-face');
        frontFace.textContent = value;

        // Back face (carta coperta)
        const backFace = document.createElement('div');
        backFace.classList.add('back-face');
        backFace.textContent = '?';

        // Aggiungi i due lati alla carta
        card.appendChild(frontFace);
        card.appendChild(backFace);

        // Aggiungi la carta alla griglia
        gameContainer.appendChild(card);

        // Event listener per girare la carta
        card.addEventListener('click', flipCard);
    });
}

// Funzione per girare la carta
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        // Prima carta girata
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Seconda carta girata
    secondCard = this;
    checkForMatch();
}

// Funzione per controllare se le due carte sono uguali
function checkForMatch() {
    let isMatch = firstCard.dataset.value === secondCard.dataset.value;
    isMatch ? disableCards() : unflipCards();
}

// Disabilita le carte se c'è un match
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchesFound++; // Incrementa il contatore delle coppie trovate

    // Controlla se tutte le coppie sono state trovate
    if (matchesFound === cardValues.length) {
        setTimeout(() => {
            winMessage.style.display = 'block'; // Mostra il messaggio di vittoria
        }, 500);
    }

    resetBoard();
}

// Rigira le carte se non c'è un match
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}

// Resetta le variabili del gioco
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Aggiunge la funzionalità di riavvio
restartButton.addEventListener('click', () => {
    createCards(); // Crea nuove carte mescolate
});

// Inizializza il gioco creando le carte
createCards();
