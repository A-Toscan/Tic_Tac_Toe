//   WINNER SECTION

const renderWinner = (playerWinner) => {
  return `
  <div class="winner-box">
  <div class="winner">
  <h2 class="winnerName">${playerWinner} Won The Game</h2>
  <div class="button-player" id="button-play-again">
      <button id="winner-button">Play Again</button>
  </div>
  </div>
  </div>`;
};

const renderDraw = () => {
  return `
  <div class="draw-box">
  <div class="draw">
  <h2 class="winnerDraw">The Game was draw</h2>
  <div class="button-player" id="button-play-again">
      <button id="draw-button">Play Again</button>
  </div>
  </div>
  </div>`;
};

// CHECK WINNER / DRAW FUNCTIONALITY

const checkWinner = (playerMark, mapBoxes) => {
  const uiRenderWinner = () => {
    if (playerMark == "X") {
      container.innerHTML = renderWinner(
        playersBtn.player1.name,
        playersBtn.player1.mark
      );
    } else if (playerMark == "O") {
      container.innerHTML = renderWinner(
        playersBtn.player2.name,
        playersBtn.player2.mark
      );
    }

    const winnerButton = document.getElementById("winner-button");
    winnerButton.addEventListener("click", () => {
      renderIndex();
      renderBoard();
    });

    const drawButton = document.getElementById("draw-button");
    drawButton.addEventListener("click", () => {
      renderIndex();
      renderBoard();
    });
  };
  console.log("check Winner");
  console.log(playerMark);
  console.log(mapBoxes);
  if (
    mapBoxes[0] == playerMark &&
    mapBoxes[1] == playerMark &&
    mapBoxes[2] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[3] == playerMark &&
    mapBoxes[4] == playerMark &&
    mapBoxes[5] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[6] == playerMark &&
    mapBoxes[7] == playerMark &&
    mapBoxes[8] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[0] == playerMark &&
    mapBoxes[3] == playerMark &&
    mapBoxes[6] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[1] == playerMark &&
    mapBoxes[4] == playerMark &&
    mapBoxes[7] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[2] == playerMark &&
    mapBoxes[5] == playerMark &&
    mapBoxes[8] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[0] == playerMark &&
    mapBoxes[4] == playerMark &&
    mapBoxes[8] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[2] == playerMark &&
    mapBoxes[4] == playerMark &&
    mapBoxes[6] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[0] != "" &&
    mapBoxes[1] != "" &&
    mapBoxes[2] != "" &&
    mapBoxes[3] != "" &&
    mapBoxes[4] != "" &&
    mapBoxes[5] != "" &&
    mapBoxes[6] != "" &&
    mapBoxes[7] != "" &&
    mapBoxes[8] != ""
  ) {
    const uiXTurn = document.getElementById("X-Turn");
    const uiOTurn = document.getElementById("O-Turn");

    container.innerHTML = renderDraw();
    uiXTurn.style.display = "none";
    uiOTurn.style.display = "none";
    const restartButton = document.getElementById("draw-button");
    restartButton.addEventListener("click", () => {
      renderIndex();
    });
  }
};
