import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static countClassNecromancer = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.countIncrement();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static countIncrement() {
    this.countClassNecromancer += 1;
  }

  static createdArchetypeInstances(): number {
    return this.countClassNecromancer;
  }
}