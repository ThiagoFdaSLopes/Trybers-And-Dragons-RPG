import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static countClassMage = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.countIncrement();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static countIncrement() {
    this.countClassMage += 1;
  }

  static createdArchetypeInstances(): number {
    return this.countClassMage;
  }
}