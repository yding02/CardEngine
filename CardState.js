class CardState {
  constructor(players) {
    this.players = players;
  }

  renderPlayers() {
    var numPlayers = this.players.length;
    for (playerIndex in this.players) {
      player = this.players[playerIndex];
      var angle = 270 + (360 / numPlayers * playerIndex);
      player.renderPlayer(angle);
    }
  }


}
