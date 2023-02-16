import Fighter, { SimpleFighter } from './Fighter';
import Race from './Races/Race';
import Archetype from './Archetypes';
import Energy from './Energy';
import Elf from './Races/Elf';
import Mage from './Archetypes/Mage';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength as number;
  }

  get defense(): number {
    return this._defense as number;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const energyObj = { ...this._energy };
    return energyObj;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (damage <= 0) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const life = this._maxLifePoints + getRandomInt(1, 10);
    if (life > this._race.maxLifePoints) { 
      this._maxLifePoints = this.race.maxLifePoints;
      this._lifePoints = this.race.maxLifePoints;
    } else {
      this._maxLifePoints = life;
      this._lifePoints = life;
    }
    this._energy.amount = 10;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
  }
}