import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static countClassWarrior = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.countIncrement();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static countIncrement() {
    this.countClassWarrior += 1;
  }

  static createdArchetypeInstances(): number {
    return this.countClassWarrior;
  }
}