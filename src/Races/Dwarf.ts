import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoint: number;
  static countClassDwarf = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 80;
    Dwarf.incrementCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  static incrementCount() {
    this.countClassDwarf += 1;
  }

  static createdRacesInstances(): number {
    return this.countClassDwarf;
  }
}