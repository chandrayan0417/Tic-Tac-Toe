let boxes = document.body.querySelectorAll(".box");
let resetBn = document.querySelector("#reset");

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
  });
});
