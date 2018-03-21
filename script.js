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

// counting how many hands have been dealt
let handCount = 0;
// collecting each dealt card into arrays
let ph = [];
let dh = [];

function clearTable() {
//reset hand arrays
ph = [];
dh = [];
switch(document.getElementById("cardD01").style.display){
  case "inline-block" :
  document.getElementById("cardD01").style.display="none";
  document.getElementById("cardD02").style.display="none";
  document.getElementById("cardD03").style.display="none";
  document.getElementById("cardD04").style.display="none";
  document.getElementById("cardD05").style.display="none";
  document.getElementById("cardP01").style.display="none";
  document.getElementById("cardP02").style.display="none";
  document.getElementById("cardP03").style.display="none";
  document.getElementById("cardP04").style.display="none";
  document.getElementById("cardP05").style.display="none";
  break;
  case "none" :
  return;
}
}

function dealCards() {
  clearTable();
  handCount += 1;
  //empties player comment box
  document.getElementById("playerCom").innerHTML = "";
  //empties dealer comment box
  document.getElementById("dealerCom").innerHTML = "";
  //updates dom from handCount
  document.getElementById("COUNT").innerHTML = handCount;
  let res = document.getElementById("dealerHand");
  let resa = document.getElementById("playerHand");
  //draw first cards
  let dealerCard = getCard();
  document.getElementById("cardD01").innerHTML = dealerCard;
  document.getElementById("cardD01").style.display = "inline-block";
  let playerCard = getCard();
  document.getElementById("cardP01").innerHTML = playerCard;
  document.getElementById("cardP01").style.display = "inline-block";
  //send card values to dom
  resa.value = playerCard;
  res.value = dealerCard;
  //add initial cards into hand arrays
  dh.push(dealerCard);
  ph.push(playerCard);
  console.log(ph, dh);
}

function dealer() {
  console.log(dh.length);
  let res = document.getElementById("dealerHand");
  //while dealer has less than 17 it has to hit
  while (res.value < 17) {
    let newCard = getCard();
    switch (dh.length) {
      case 1:
      document.getElementById("cardD02").innerHTML = newCard;
      document.getElementById("cardD02").style.display = "inline-block";
          break;
      case 2:
      document.getElementById("cardD03").innerHTML = newCard;
      document.getElementById("cardD03").style.display = "inline-block";
          break;
      case 4:
      document.getElementById("cardD04").innerHTML = newCard;
      document.getElementById("cardD04").style.display = "inline-block";
          break;
      case 5:
      document.getElementById("cardD05").innerHTML = newCard;
      document.getElementById("cardD05").style.display = "inline-block";
  }
    let newTotal = parseInt(res.value) + parseInt(newCard);
    res.value = newTotal;
    //add new card into dealer hand array
    dh.push(newCard);
    console.log(ph, dh);
  }
  determineWinner();
}

function player() {
  let res = document.getElementById("playerHand");
  let newCard = getCard();
  switch (ph.length) {
    case 1:
    document.getElementById("cardP02").innerHTML = newCard;
    document.getElementById("cardP02").style.display = "inline-block";
        break;
    case 2:
    document.getElementById("cardP03").innerHTML = newCard;
    document.getElementById("cardP03").style.display = "inline-block";
        break;
    case 3:
    document.getElementById("cardP04").innerHTML = newCard;
    document.getElementById("cardP04").style.display = "inline-block";
        break;
    case 4:
    document.getElementById("cardP05").innerHTML = newCard;
    document.getElementById("cardP05").style.display = "inline-block";
}
  let newTotal = parseInt(res.value) + parseInt(newCard);
  res.value = newTotal;
  //add new card into player hand array
  ph.push(newCard);
  console.log(ph, dh);
  //if player has more than 21 the dealer wins
  if (res.value > 21) {
    whoWonC += 1;
    document.getElementById("dealerWins").innerHTML = whoWonC;
    document.getElementById("dealerCom").innerHTML = "I WIN";
  }
}
//how many hands the player has won
let whoWonH = 0;
//how many hands the dealer has won
let whoWonC = 0;

function determineWinner() {
  let a = parseInt(document.getElementById("playerHand").value);
  let b = parseInt(document.getElementById("dealerHand").value);
  //if dealer has more than 21, player wins
  if (b > 21) {
    whoWonH += 1;
    document.getElementById("playerWins").innerHTML = whoWonH;
    document.getElementById("playerCom").innerHTML = "I WIN";
    // return;
  } else if (a == b) {
    //if dealer and player has the same score, its a tie
    document.getElementById("playerCom").innerHTML = "TIE";
    document.getElementById("dealerCom").innerHTML = "TIE";
  } else if (a > b) {
    //if player has more than dealer, player wins
    whoWonH += 1;
    document.getElementById("playerWins").innerHTML = whoWonH;
    document.getElementById("playerCom").innerHTML = "I WIN";
  } else if (b > a) {
    //if dealer has more than player, dealer wins
    whoWonC += 1;
    document.getElementById("dealerWins").innerHTML = whoWonC;
    document.getElementById("dealerCom").innerHTML = "I WIN";
  }
}
