// anonymous object: Object without a name
//                  not directly reference
//      less syntax, no need for unique names


class Card{

  constructor(value, suit){
    this.value = value;
    this.suit = suit;
  }
}

// let card1 = new Card("A", "hearts");
// let card2 = new Card("A", "spades");
// let card3 = new Card("A", "diamond");
// let card4 = new Card("A", "club");
// let card5 = new Card("2", "hearts");
// let card6 = new Card("2", "spades");
// let card7 = new Card("2", "diamond");
// let card8 = new Card("2", "club");

// let cards = [card1,card2,card3,card4,card5,card6,card7,card8];

//creating the same array with anonymous objects


let cards = [new Card("A", "hearts"),
            new Card("A", "spades"),
            new Card("A", "diamond"),
            new Card("A", "club"),
            new Card("2", "hearts"),
            new Card("2", "spades"),
            new Card("2", "diamond"),
            new Card("2", "club"), 
];

// console.log(card1.value + card1.suit);
console.log(cards[0].value + cards[0].suit);

//to diplay it with a foreach()

cards.forEach(card => console.log(`${card.value}${card.suit}`));