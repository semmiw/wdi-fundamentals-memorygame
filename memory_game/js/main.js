var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"	
}
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",	
}
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"	
}
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function () {
	this.setAttribute(cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
};
var flipCard = function (this.getAttribute(cards[cardId]); {
	console.log("User flipped" + cards[cardId].rank);
}
var errorAlert = function() {
  alert("Please be sure to fill out all required fields.");
};

cardsInPlay.push(cards[rank]);
console.log(cardImage)
console.log(suit)
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
    // loop through the cards array
var cardElement = document.createElement('img');
cardElement.setAttribute(data-i, 'images/back.png');
cardElement.addEventListener('click', flipCard);
var node = document.createElement ("game-board")
var textnode = document.createTextNode(cardElement); 
node.appendChild(textnode);
document.getElementById("game-board").appendChild(node);     // Append <li> to <ul> with id="myList"
};
var createBoard = function ();