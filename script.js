// FASE DI PREPARAZIONE

//Recuperare dalla pagina tutti gli elementi di interesse
const scoreCounter = document.querySelector(".score-counter");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const endGameText = document.querySelector(".end-game-text");
const playAgainButton = document.querySelector(".play-again");

//preparo informazioni utili alla logica di gioco
const toatalCells = 100;
const totalBombs = 16;
const maxScore = toatalCells - totalBombs;
const bombsList = []; //Questo è un array vuoto
let score = 0;

//Generare TOT bombe casuali
while (bombsList.length < totalBombs) {
  const number = Math.floor(Math.random() * toatalCells) + 1;
  if (!bombsList.includes(number)) {
    bombsList.push(number);
  }
}

console.log(bombsList);

//Griglia e logica di gioco

let isCellEven = false;
let isRowEven = false;

// Creo 100 celle

for (let i = 1; i <= 100; i++) {
  //creo un elemento e gli dò la classe 'cell'
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = i;
  console.log(i);

  isCellEven = i % 2 === 0;

  //Se la riga è pari e la cella è pari--> dark-cell
  if (isRowEven && isCellEven) cell.classList.add("dark-cell");
  //Se la riga è dispari e la cella è dispari--> dark-cell
  else if (!isRowEven && !isCellEven) cell.classList.add("dark-cell");

  // //Se sono alla fine della riga:
  if (i % 10 === 0) isRowEven = !isRowEven;

  //Gestiamo il click della cella
  cell.addEventListener("click", function () {
    //Questo codice viene eseguito quando avviene l'evento
    if (bombsList.includes(i)) {
      //Se è una bomba...
      cell.classList.add("cell-bomb");
      endGame();
    } else {
      //Se non lo è...
      cell.classList.add("cell-clicked");
      updateScore();
    }
  });

  //Lo inserisco nella griglia
  grid.appendChild(cell);
}

//Funzioni

//Funzione per aggiornare il punteggio
function updateScore() {
  score++;
  //Lo inserisco nel contatore
  scoreCounter.innerText = score;
}

//Funzione per finire la partita se trovo una bomba
function endGame() {
  console.log("La partita è finita");
}
