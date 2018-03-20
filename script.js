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

function getCard(turn) {
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

var handCount = 0;

function dealCards() {
  //add one to handCount
  handCount += 1;
  //empties player comment box
  document.getElementById("HUM").innerHTML = "";
  //empties dealer comment box
  document.getElementById("COMP").innerHTML = "";
  //updates dom from handCount
  document.getElementById("COUNT").innerHTML = handCount;
  //variable magic
  let a = parseInt((document.getElementById("dealer").value = 0));
  let res = document.getElementById("dealer");
  let aa = parseInt((document.getElementById("you").value = 0));
  let resa = document.getElementById("you");
  resa.value = a + getCard("You");
  res.value = aa + getCard("Dealer");
}

function dealer() {
  var a = parseInt(document.getElementById("dealer").value);
  var res = document.getElementById("dealer");
  //while dealer has less than 17 it has to hit
  while (res.value < 17) {
    var b = parseInt(document.getElementById("dealer").value);
    res.value = b + getCard("Dealer");
  }
}

function player() {
  var a = parseInt(document.getElementById("you").value);
  var res = document.getElementById("you");
  res.value = a + getCard("You");
  //if player has more than 21 the dealer wins
  if (res.value > 21) {
    whoWonC += 1;
    document.getElementById("COMPW").innerHTML = whoWonC;
    document.getElementById("COMP").innerHTML = "I WIN";
  }
}
//how many hands the player has won
var whoWonH = 0;
//how many hands the dealer has won
var whoWonC = 0;

function determineWinner() {
  //collect players score
  var a = parseInt(document.getElementById("you").value);
  //collect dealers score
  var b = parseInt(document.getElementById("dealer").value);
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
}
