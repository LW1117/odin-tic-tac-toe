const gameBoard = (function () {
  let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  const possibleWinPositions = [
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246",
  ];
  const getBoard = function () {
    return [...board];
  };
  const updateBoard = function (positionIndex, symbol) {
    board[positionIndex] = symbol;
  };
  const checkWin = function () {
    for (let index = 0; index < possibleWinPositions.length; index++) {
      positions = possibleWinPositions[index].split("");
      if (
        board[positions[0]] === board[positions[1]] &&
        board[positions[1]] === board[positions[2]]
      ) {
        return true;
      }
    }
    return false;
  };
  const reset = function () {
    board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  };
  return { getBoard, updateBoard, checkWin, reset };
})();

function Player(name, symbol) {
  let score = 0;
  const getScore = function () {
    return score;
  };
  const addScore = function () {
    score += 1;
  };
  return { name, symbol, getScore, addScore };
}

let currentPlayer = 0;
let gameOver = false;

const player1 = new Player("player1", "X");
const player2 = new Player("player2", "O");

const players = [player1, player2];

function reset() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.innerText = "";
  });
  gameBoard.reset();
  gameOver = false;
}

function play(square) {
  if (gameOver) {
    reset();
  }
  if (square.innerText !== "") {
    alert("Occupied!!\nChoose another option");
  } else {
    position = square.id;
    playerName = players[currentPlayer].name;
    playerSymbol = players[currentPlayer].symbol;
    gameBoard.updateBoard(position, playerSymbol);
    console.log(gameBoard.getBoard());
    square.innerText = playerSymbol;

    if (gameBoard.checkWin()) {
      winBanner = document.createElement("h2");
      winBanner.innerText = `${playerName} WINS!!`;
      winBanner.style.visibility = "visible";
      document.body.appendChild(winBanner);
      gameOver = true;
    }
    currentPlayer = (currentPlayer + 1) % 2;
  }
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => play(square));
});
