/* 
Starting the Java Script animation
*/

// Board Game marks

const htmlBoxes = document.querySelectorAll(".boxes");
const mapBoxes = [];

let turno1 = false;

const manageClick = (element) => {
  console.log(element.innerHTML);

  if ((element.innerHTML = " ")) {
    if (turno1) {
      element.innerHTML = `<img src="img/O.png">`;
    } else {
      element.innerHTML = `<img src="img/X.png">`;
    }
    turno1 = !turno1;
  }

  manageTablero(htmlBoxes);
};

const manageTablero = (uiBoxes) => {
  for (const c of uiBoxes) {
    console.log(c.innerHTML);
  }
};

for (let c of htmlBoxes) {
  c.addEventListener("click", (event) => {
    const element = event.target;
    manageClick(element);
  });
}

// All Possible Winning Combinations
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let winningFunc = () => {
  for (let a = 0; a <= 7; a++) {
      let b = winningCombinations[a];
      // console.log(b);

      if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
          continue;
      } else if (boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
          // console.log("X is The Winner");

          // Adding Winner text
          winnerName.innerText = `Player X Win The Game!`;

          // show "Winner Page" & Hide "Mai Page"
          mainPage.style.display = "none";
          winner.style.display = "block";
      } else if (boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O") {
          // console.log("O is The Winner");

          // Adding Winner text
          winnerName.innerText = `Player O Win The Game!`;

          // show "Winner Page" & Hide "Mai Page"
          mainPage.style.display = "none";
          winner.style.display = "block";
      } else {
          continue;
      }
  }
}

// Match Draw Function
let drawFunc = () => {
  if (boxes[0].id != "" && boxes[1].id != "" &&
      boxes[2].id != "" && boxes[3].id != "" &&
      boxes[4].id != "" && boxes[5].id != "" &&
      boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {
      // Adding "Draw" text
      winnerName.innerText = `Match Draw!`;

      // show "Winner Page" & Hide "Mai Page"
      mainPage.style.display = "none";
      winner.style.display = "block";
  }
}

// Reset Game
quit.addEventListener("click", () => {
  window.location.reload();
})