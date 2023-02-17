# Trybers-And-Dragons-RPG
Neste projeto foi desenvolvido os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game)

## Stack utilizada
Back-end: Javascript, Typescript, Node.js, POO, SOLID, Docker

## Rodando O Docker
Rode o serviço node com o comando ```docker-compose up -d```.

Esse serviço ira inicializar um container chamado ```trybers_and_dragons```.
A partir daqui você pode rodar o container ```trybers_and_dragons``` via CLI ou abri-lo no VS Code.
Use o comando ```docker exec -it trybers_and_dragons bash```.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
Instale as dependências "Caso existam" com ```npm install```

:warning: Atenção :warning: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

:warning: Atenção :warning: O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

:warning: Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

:warning: Atenção :warning: Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```bash
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```
Foram encontradas 2 possíveis soluções para este problema:
* Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
* Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.

#Criando Batalhas
## Batalha PVP (Player vs Player)
Para criar uma Batalha PVP, voce precisa criar duas instancias de players. Dica: Voce pode upar o level dos personagens com o metodo `levelUp`.

```javascript
const player1 = new Character('Harold');
const player2 = new Character('Any');
player1.levelUp();
```
Criando a instancia de PVP, voce precisa instanciar a batalha PVP da seguinte forma:
```javascript
const pvp = new PVP(player1, player2);
```
## Batalha PVE (Player vs "Ambiente")
Para criar uma Batalha PVE, voce precisa ter um player e um `array` de monsters( no array pode ser inserido a quantidade que desejar de `monstros` e `dragons`). Dica: Voce pode upar o level dos personagens com o metodo `levelUp`.

```javascript
const player1 = new Character('Harold');
const monster = new Monster();
```
Criando a instancia de PVE, voce precisa instanciar a batalha PVE da seguinte forma:
```javascript
const pve = new PVE(player1, [monster]);
```
