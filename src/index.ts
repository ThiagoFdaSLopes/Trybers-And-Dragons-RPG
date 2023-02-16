import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Harold');
const player2 = new Character('Any');
const player3 = new Character('Gerald');

for (let i = 0; i < 500; i += 1) player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1]);

function runBattles(arr: Battle[]): void {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].fight();
  }
}

export { player1, player2, player3, monster1, monster2, pve, pvp, runBattles };
