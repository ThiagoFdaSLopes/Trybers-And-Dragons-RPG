export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType,
  amount: number,
}
