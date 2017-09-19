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
    throw "not implemented";
  }

  renderCards(position) {
    throw "not implemented";
  }
}
