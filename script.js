// function getSuit() {
//   let suit = Math.floor(Math.random() * 4) + 1;
//   if (suit === 1) {
//     return "Clubs";
//   } else if (suit === 2) {
//     return "Diamonds";
//   } else if (suit === 3) {
//     return "Hearts";
//   } else if (suit === 4) {
//     return "Spades";
//   }
// }

function getCard() {
  //draws a random number (card) between 1 and 13
  let card = Math.floor(Math.random() * 13) + 1;
  //   let suit = getSuit();
  //if card is a 1, its an Ace, which is worth 11
  if (card === 1) {
    return 11;
  }
  //if card is 11, 12, or 13, they are face cards which are worth 10
  if (card > 10) {
    return 10;
  }
  //if card is not 1, 11, 12, or 13, return card
  return card;
}

let handCount = 0;
// hand arrays - collecting each dealt card into arrays
let ph = [];
let dh = [];

function dealCards() {
  //add one to handCount
  handCount += 1;
  //empties player comment box
  document.getElementById("HUM").innerHTML = "";
  //empties dealer comment box
  document.getElementById("COMP").innerHTML = "";
  //updates dom from handCount
  document.getElementById("COUNT").innerHTML = handCount;
  //dealer variable magic
  let a = parseInt((document.getElementById("dealerHand").value = 0));
  let res = document.getElementById("dealerHand");
  //player variable magic
  let aa = parseInt((document.getElementById("playerHand").value = 0));
  let resa = document.getElementById("playerHand");
  //variable magic
  resa.value = a + getCard();
  res.value = aa + getCard();
  //add initial cards into hand arrays
  dh.push(res.value);
  ph.push(resa.value);
  console.log(ph, dh);
}

function dealer() {
  //   let a = parseInt(document.getElementById("dealerHand").value);
  let res = document.getElementById("dealerHand");
  //while dealer has less than 17 it has to hit
  while (res.value < 17) {
    let b = parseInt(document.getElementById("dealerHand").value);
    //draw new card
    let newCard = getCard();
    //add new card to total
    res.value = b + newCard;
    //add new card into dealer hand array
    dh.push(newCard);
    console.log(ph, dh);
  }
}

function player() {
  let a = parseInt(document.getElementById("playerHand").value);
  let res = document.getElementById("playerHand");
  //draw new card
  let newCard = getCard();
  //add new card to total
  res.value = a + newCard;
  //add new card into player hand array
  ph.push(newCard);
  console.log(ph, dh);
  //if player has more than 21 the dealer wins
  if (res.value > 21) {
    whoWonC += 1;
    document.getElementById("COMPW").innerHTML = whoWonC;
    document.getElementById("COMP").innerHTML = "I WIN";
  }
}
//how many hands the player has won
let whoWonH = 0;
//how many hands the dealer has won
let whoWonC = 0;

function determineWinner() {
  //collect players score
  let a = parseInt(document.getElementById("playerHand").value);
  //collect dealers score
  let b = parseInt(document.getElementById("dealerHand").value);
  //if dealer has more than 21, player wins
  if (b > 21) {
    whoWonH += 1;
    document.getElementById("HUMW").innerHTML = whoWonH;
    document.getElementById("HUM").innerHTML = "I WIN";
    return;
  }
  //if dealer and player has the same score, its a tie
  if (a == b) {
    document.getElementById("HUM").innerHTML = "TIE";
    document.getElementById("COMP").innerHTML = "TIE";
  }
  //if player has more than dealer, player wins
  if (a > b) {
    whoWonH += 1;
    document.getElementById("HUMW").innerHTML = whoWonH;
    document.getElementById("HUM").innerHTML = "I WIN";
  }
  //if dealer has more than player, dealer wins
  if (b > a) {
    whoWonC += 1;
    document.getElementById("COMPW").innerHTML = whoWonC;
    document.getElementById("COMP").innerHTML = "I WIN";
  }
  ph = [];
  dh = [];
}
