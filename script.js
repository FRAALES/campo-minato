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

