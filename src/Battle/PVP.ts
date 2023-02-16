import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    characterOne: Fighter,
    private characterTwo: Fighter,
  ) {
    super(characterOne);
  }

  fight(): number {
    const battle = true;
    while (battle) {
      this.player.attack(this.characterTwo);
      this.characterTwo.attack(this.player);
      if (this.player.lifePoints === -1) break;
      if (this.characterTwo.lifePoints === -1) break;
    }
    return super.fight();
  }
}