import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoint: number;
  static countClassElf = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 99;
    Elf.incrementCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  static incrementCount() {
    this.countClassElf += 1;
  }

  static createdRacesInstances(): number {
    return this.countClassElf;
  }
}