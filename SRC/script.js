const dealersDeck = {
  suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  currentDeck: [],
  currentHand: [],
  initilizeDeck() {
    const {suits, values, currentDeck} = this
    for (let suit of suits) {
      for (let value of values.split(',')) {
        currentDeck.push({
          suit,
          value
        })
      }
    }
    return currentDeck;
  },
  shuffleDeck() {
    const {currentDeck} = this;
    for (let i = currentDeck.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
    }
  },
  shuffleMultipleTimes() {
    this.shuffleDeck();
    this.shuffleDeck();
    this.shuffleDeck();
    this.shuffleDeck();
    this.shuffleDeck();
  },
  drawSingleCard() {
    const {currentDeck, currentHand} = this;
    const draw = currentDeck.pop();
    return currentHand.push(draw);
  },
  drawCards(cards) {
    const blackJackHand = [];
    for (let i = 0; i < cards; i++) {
      blackJackHand.push(dealersDeck.drawSingleCard())
    }
    return blackJackHand;
  }
};

//build a custom deck that has been shuffled

const buildBlackJackDeck = (deck) => {
  const buildDeck = deck.initilizeDeck();
  const shuffle = deck.shuffleMultipleTimes(buildDeck);
  return deck;
};

//draw two random cards
const drawCards = (currentDeck) => {
  let currentHand = currentDeck;
  currentHand.drawCards(2);
  return currentHand
}

//assign point value to drawn cards
const pointValue = (currentDeck) => {

  let totalPoints;
  let currentHand = dealersDeck.currentHand
  // const values = currentDeck.values.split(',');

  const pointValue = currentHand.map( (cardValue) => {
    if (cardValue.value === '2') {
      cardValue.value = 2;
    } else if (cardValue.value === '3') {
      cardValue.value = 3;
    } if (cardValue.value === '4') {
      cardValue.value = 4;
    } else if (cardValue.value === '5') {
      cardValue.value = 5;
    } else if (cardValue.value === '6') {
      cardValue.value = 6;
    } else if (cardValue.value === '7') {
      cardValue.value = 7;
    } else if (cardValue.value === '8') {
      cardValue.value = 8;
    } else if (cardValue.value === '9') {
      cardValue.value = 9;
    } else if (cardValue.value === '10') {
      cardValue.value = 10;
    } else if (cardValue.value === 'J') {
      cardValue.value = 10;
    } else if (cardValue.value === 'Q') {
      cardValue.value = 10;
    } else if (cardValue.value === 'K') {
      cardValue.value = 10;
    } else if (cardValue.value === 'A') {
      cardValue.value = 11;
    } else {
      alert('No Card Value Given');
    }
    return cardValue.value;
  })

  const sumOfCards = pointValue.reduce( (prev, currentPoint) => {
    return prev + currentPoint;
  }, 0)
  return sumOfCards;
}
