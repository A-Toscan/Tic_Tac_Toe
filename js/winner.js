//   WINNER SECTION

//Función de estructura HTML  Winner
// const getWinnerHTML = (game) => {
//   return `
//     <div class="winner-box">
//     <div class="winner">
//     <h2 class="winnerName">${game.winner} Won The Game</h2>
//     <div class="button-player">
//         <button id="winner-button">Play Again</button>
//     </div>
//     </div>
//     </div>`;
// };

// const renderWinner = () => {
//   container.innerHTML = getWinnerHTML(game);
//   console.log("winner");
// };

// const setWinnerUiEventos = () => {
//   document.getElementById("winner-button").addEventListener("click", () => {
//     renderWelcome();
//     setWelcomeUiEventos();
//   });
// };

const renderWinner = (playerWinner) => {
  return `<div class="winner-box">
  <div class="winner">
  <h2 class="winnerName">${playerWinner} Won The Game</h2>
  <div class="button-player">
      <button id="winner-button">Play Again</button>
  </div>
  </div>
  </div>`;
};



/* Pensar como refactorizar el codigo de checkWinner para poder hacer 
el if de mapBoxes[0] == player (como cambiar el codigo para que la condicion 
sea eventualmente True)*/

const checkWinner = (player, mapBoxes) => {
  console.log("check-winner");
  const uiRenderWinner = () => {
  console.log("render-winner");

    container.innerHTML = renderWinner(player);
  };
  console.log(mapBoxes[0]);
  if (mapBoxes[0] == player && mapBoxes[1] == player && mapBoxes[2] == player) {
    uiRenderWinner();
  } else if (
    mapBoxes[3] == player &&
    mapBoxes[4] == player &&
    mapBoxes[5] == player
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[6] == player &&
    mapBoxes[7] == player &&
    mapBoxes[8] == player
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[0] == player &&
    mapBoxes[3] == player &&
    mapBoxes[6] == player
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[1] == player &&
    mapBoxes[4] == player &&
    mapBoxes[7] == player
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[2] == player &&
    mapBoxes[5] == player &&
    mapBoxes[8] == player
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[0] == player &&
    mapBoxes[4] == player &&
    mapBoxes[8] == player
  ) {
    uiRenderWinner();
  } else if (
    mapBoxes[2] == player &&
    mapBoxes[4] == player &&
    mapBoxes[6] == player
  ) {
    uiRenderWinner();
  }
};

const checkDraw = (mapBoxes) => {
  if (
    mapBoxes[0] != undefined &&
    mapBoxes[1] != undefined &&
    mapBoxes[2] != undefined &&
    mapBoxes[3] != undefined &&
    mapBoxes[4] != undefined &&
    mapBoxes[5] != undefined &&
    mapBoxes[6] != undefined &&
    mapBoxes[7] != undefined &&
    mapBoxes[8] != undefined
  ) {
    container.innerHTML = renderWinner("The Game is draw!");
  }
};
