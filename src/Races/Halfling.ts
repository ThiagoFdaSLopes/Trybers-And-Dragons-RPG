import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoint: number;
  static countClassHalfling = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 60;
    Halfling.incrementCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  static incrementCount() {
    this.countClassHalfling += 1;
  }

  static createdRacesInstances(): number {
    return this.countClassHalfling;
  }
}