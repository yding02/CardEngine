class CardEngine {
  constructor(validMove, deal) {
    this.validMove = validMove;
    this.deal = deal;
    this.players = deal.dealCards()
  }

  function playMove(move) {
    if (validMove.valid(move)) {
      player = move.player;
      cards = move.cards;
    }

  }
}
