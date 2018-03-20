function getSuit(){
    let suit = Math.floor(Math.random() * 4) + 1;
     if(suit === 1){
         return "Clubs";
     }else if(suit === 2){
         return "Diamonds";
     }else if(suit === 3){
         return "Hearts";
     }else if(suit === 4){
         return "Spades";
     }
 }

 function getCard(turn){
    let card = Math.floor(Math.random() * 13) + 1;
    let suit = getSuit();
    if(card === 1){
        return 11;
    }
    if(card > 10){
        return 10;
    }
    return card;
 }

 var counter = 0;

 function generateCard(){
     counter += 1;
     document.getElementById("HUM").innerHTML = "";
     document.getElementById("COMP").innerHTML = "";
     document.getElementById("COUNT").innerHTML = counter;
     var a = parseInt(document.getElementById("dealer").value = 0);
     var res = document.getElementById("dealer");
     var aa = parseInt(document.getElementById("you").value = 0);
     var resa = document.getElementById("you");
     resa.value = a + getCard("You");
     res.value = aa. getCard("Dealer");
 }

 function computer(){
     var a = parseInt(document.getElementById("dealer").value);
     var res = document.getElementById("dealer");
     while(res.value < 17){
         var b = parseInt(document.getElementById("dealer").value);
         res.value = b + getCard("Dealer");
     }
 }

 function human(){
     var a = parseInt(document.getElementById("you").value);
     var res = document.getElementById("you");
     res.value = a + getCard("You");
     if(res.value > 21){
         whoWonC += 1;
         document.getElementById("COMPW").innerHTML = whoWonC;
         document.getElementById("COMP").innerHTML = "I WIN";
     }
 }

 var whoWonH = 0;
 var whoWonC = 0;

 function determineWinner(){
     var a = parseInt(document.getElementById("you").value);
     var b = parseInt(document.getElementById("dealer").value);
     if(b > 21){
         whoWonH += 1;
         document.getElementById("HUMW").innerHTML = whoWonH;
         document.getElementById("HUM").innerHTML = "I WIN";
         return;
     }if(a==b){
         document.getElementById("HUM").innerHTML = "TIE";
         document.getElementById("COMP").innerHTML = "TIE";
     }if(a>b){
         whoWonH += 1;
         document.getElementById("HUMW").innerHTML = whoWonH;
         document.getElementById("HUM").innerHTML = "I WIN";
     }if(b>a){
         whoWonC += 1;
         document.getElementById("COMPW").innerHTML = whoWonC;
         document.getElementById("COMP").innerHTML = "I WIN";
     }
 }