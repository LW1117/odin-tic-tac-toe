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
  const changeBoard = function (positionIndex, symbol) {
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
  return { getBoard, changeBoard, checkWin };
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
