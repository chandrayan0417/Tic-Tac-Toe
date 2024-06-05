let boxes = document.body.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgDiv = document.querySelector(".msgDiv");
let msg = document.querySelector("#winningMsg");
let count = 0;
let turnO = true;

const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turnO) {
        box.innerText = "O";
        box.classList.remove("red");
        box.classList.add("green");
        msg.innerText = "X's turn";
      } else {
        box.innerText = "X";
        box.classList.remove("green");
        box.classList.add("red");
        msg.innerText = "O's turn";
      }
      turnO = !turnO;
      box.disabled = true;
      count++;
      checkWinner();
      if (count === 9 && msg.innerText.indexOf('wins') === -1) {
        msg.innerText = "It's a draw!";
        setTimeout(() => {
          endGame();
        }, 200);
      }
    }
  });
});

const checkWinner = () => {
  for (let pattern of patterns) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      displayWinner(val1);
      return;
    }
  }
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const displayWinner = (winner) => {
  msg.innerText = `${winner} wins!`;
  disableBoxes();  // Disable boxes immediately after a win
  setTimeout(() => {
    endGame();
  }, 200);
};

const endGame = () => {
  setTimeout(() => {
    if (confirm("Game over! Do you want to play again?")) {
      resetGame();
    }
  }, 200);
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("red", "green");  // Remove any color classes
  });
  turnO = true;
  msg.innerText = "O's turn";
  count = 0;
};

resetBtn.addEventListener("click", resetGame);
