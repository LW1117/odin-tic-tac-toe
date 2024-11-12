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
  return { getBoard, updateBoard, checkWin };
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

function play() {
  const player1 = new Player("player1", "X");
  const player2 = new Player("player2", "O");
  let currentPlayer = 0;
  const players = [player1, player2];
  while (true) {
    position = prompt(`Player ${currentPlayer + 1}\nYour chance`);
    gameBoard.updateBoard(position, players[currentPlayer].symbol);
    if (gameBoard.checkWin()) {
      alert(`${players[currentPlayer].name} wins!!`);
      break;
    }
    currentPlayer = (currentPlayer + 1) % 2;
  }
}

play();
