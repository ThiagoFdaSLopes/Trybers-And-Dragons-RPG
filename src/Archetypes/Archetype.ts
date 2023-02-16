import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private _name: string,
    private _special: number = 0,
    private _cost: number = 0,
  ) {}

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}