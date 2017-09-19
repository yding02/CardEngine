function renderNPlayers(n) {
  var players = [];
  for (var i = 1; i <= n; i++) {
    var player = new Player("player" + i, null, null);
    players.push(player);
  }
  var c = new CardState(players);
  c.renderPlayers();
}

