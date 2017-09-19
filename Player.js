class Player {
  /**
  * Abstract class for various players
  **/
  constructor(name, cards, team) {
    this.name = name;
    this.cards = cards;
    this.team = team;
  } 

  renderPlayer(position) {
    context.beginPath();
    context.save();
    context.translate(position.x, position.y);
    context.rotate(position.angle);
    context.textAlign="center";
    context.fillText(this.name, 0, 0);
    context.restore();
    context.closePath();
  }

  renderCards(position) {
    throw "not implemented";
  }
}
