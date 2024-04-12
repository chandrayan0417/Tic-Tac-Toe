let boxes = document.body.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgDiv = document.querySelector(".msgDiv");
let msg = document.querySelector("#winningMsg");

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
        msg.innerText = "X's turn";
      } else {
        box.innerText = "X";
        msg.innerText = "O's turn";
      }
      turnO = !turnO;
      checkWinner();
      box.disabled = true;
    }
  });
});

const checkWinner = () => {
  for (let i of patterns) {
    let val1 = boxes[i[0]].innerText;
    let val2 = boxes[i[1]].innerText;
    let val3 = boxes[i[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      displayWinner(val1);
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
  // msgDiv.classList.remove("hideMsg");
  disableBoxes();
};

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    turnO = true;
    msg.innerText = "O's turn";
    // msgDiv.classList.add("hideMsg");
  });
});
