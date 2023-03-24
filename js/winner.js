//   WINNER SECTION

//Función de estructura HTML  Winner
const getWinnerHTML = (game) => {
    return `
    <div class="winner">
    <h2 class="winnerName">${game.winner} Won The Game</h2>
    <div class="button-player">
        <button id="winner-button">Play Again</button>
    </div>
    </div>`;
  
  };
  
  
  const renderWinner = () => {
    container.innerHTML = getWinnerHTML(game);
  }
  
  const setWinnerUiEventos = () => {
    document.getElementById("winner-button").addEventListener("click", () => {
        renderWelcome();
        setWelcomeUiEventos();
    });
  };
  