function deck(cards) {
    let deckOfCards = [];

    for (let cardAsString of cards) {
        let face = cardAsString.slice(0, -1);
        let suit = cardAsString.slice(-1);

        try {
        let card = createCard(face, suit);
        deckOfCards.push(card);
        } catch (error) {
            deckOfCards = ['Invalid card: ' + cardAsString];
        }
    }

    console.log(deckOfCards.join(' '))


    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (!faces.includes(face)) {
            throw new Error('Invalid face:' + face);     
        }
        if (!suits.hasOwnProperty(suit)) {
            throw new Error('Invalid suit:' + suit);   
        }
    
    
        const result = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit
            }
        }
    
        return result;
    }
}

deck(['AS', '10D', 'KH', '2C'])
deck(['5S', '3D', 'QD', '1C'])