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

const buildBlackJackDeck = (deck) => {
  console.log(`deck`, deck);
  const buildDeck = deck.initilizeDeck();
  return deck.shuffleDeck(buildDeck);
};

const drawCards = (currentDeck) => {
  console.log('current', currentDeck);
}


// const shuffleCard = deck => deck.shuffleDeck(buildBlackJackDeck);
