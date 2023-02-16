import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoint: number;
  static countClassOrc = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 74;
    Orc.incrementCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  static incrementCount() {
    this.countClassOrc += 1;
  }

  static createdRacesInstances(): number {
    return this.countClassOrc;
  }
}