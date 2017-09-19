class CardState {
  constructor(players) {
    this.players = players;
  }

  renderPlayers() {
    var numPlayers = this.players.length;
    for (var playerIndex in this.players) {
      var player = this.players[playerIndex];
      var position = {};
      var angle = Math.PI * 2 / numPlayers * playerIndex;
      position.x = Math.round(CANVAS_SIZE * 0.5 + (CANVAS_SIZE  * 0.5 - FONT_SIZE) * Math.sin(angle));
      position.y = Math.round(CANVAS_SIZE * 0.5 + (CANVAS_SIZE * 0.5 - FONT_SIZE) * Math.cos(angle));
      position.angle = -angle; //Canvas rotations are weird
      console.log(position);
      console.log(player);
      player.renderPlayer(position);
    }
  }  
}
