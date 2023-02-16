import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  defense: number,
  energy?: Energy

  special?(enemy: SimpleFighter): void
  levelUp(): void
}