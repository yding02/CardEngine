SUITS = ["diamond", "club", "heart", "spade", "joker"]
NUMBERS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
SPECIAL = ["SMALL JOKER", "BIG JOKER"]

CANVAS_SIZE = 720;
FONT_SIZE = 15;

var canvas = document.createElement("canvas");
canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;
var context = canvas.getContext("2d");
document.body.appendChild(canvas);

function numberToCard(number) {
  var card = {};
  if (number >= 0 && number < 52) {
    card.suit = Math.floor(number / 13);
    card.number = number % 13;
  } else if (number < 54) {
    card.suit = "joker";
    card.number = SPECIAL[number % 13]
  } else {
    card.suit = null;
    card.number = null;
  }
  return card;
}
