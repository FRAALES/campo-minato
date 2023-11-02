// FASE DI PREPARAZIONE

//Recuperare dalla pagina tutti gli elementi di interesse
const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');


//preparo informazioni utili alla logica di gioco
const toatalCells = 100;
const totalBombs = 16;
const maxScore = toatalCells - totalBombs;
const bombsList = []; //Questo è un array vuoto
let score = 0;


//Generare TOT bombe casuali
while(bombsList.length < totalBombs){
    const number = Math.floor(Math.random() * toatalCells) + 1;
    if(!bombsList.includes(number)){
        bombsList.push(number);
    }
};

console.log(bombsList);



//Griglia e logica di gioco

let isCellEven = false;
let isRowEven = false;

for(let i=1; 1<=100; i++) {
    //creo un elemento e gli dò la classe 'cell'
    const cell = document.createElement('div');
    cell.classList.add('cell');

    isCellEven = i % 2 ===0;

    //Se la riga è pari e la cella è pari, casella grigia
    //se la riga è dispari e la cella è dispari, casella grigia

    if(isCellEven && isRowEven) cell.classList.add('cell-dark');
    else if (!isRowEven && !isCellEven) cell.classList.add('cell-dark');

    //Se sono alla fine della riga...
    if(i%10 === 0) isRowEven = !isRowEven;

    //Lo inserisco nella griglia
    grid.appendChild(cell);
};