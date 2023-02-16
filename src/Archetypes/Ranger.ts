import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static countClassRanger = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.countIncrement();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static countIncrement() {
    this.countClassRanger += 1;
  }

  static createdArchetypeInstances(): number {
    return this.countClassRanger;
  }
}