import SnakeGame from 'dbi-snake';

async function main() {
    let game = new SnakeGame(document.body, 3);
    await game.start();
    //game.destroy();
};

main();
