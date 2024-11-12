const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = function () {
    return board;
  };
  const changeBoard = function (position, symbol) {
    board[position] = symbol;
  };
  return { getBoard, changeBoard };
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

// function FlowControl() {
//   // ga
// }
