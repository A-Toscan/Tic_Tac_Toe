// BOARD GAME

//Función que construyo la estructura HTML de la vista Game
const getBoardGameHTML = (game) => {
  return `
  <div class="game-container">
<div class="mainPage">
<div class="headerBtns">
  <div class="showChange">
  <a href="winner.html"
      ><button id="X-Turn">
    <img src="img/player.png" alt="player" class="turn-img"
    />
  </button></a>
  
  <a href="winner.html"
      ><button id="O-Turn">
    <img src="img/player.png" alt="bot" class="turn-img"
    />
  </button></a>
</div>
  
</div>


<div class="info">
<div class="points play1">${game.player1.name}</div>
<div class="points play2">${game.player2.name}</div>
</div>



<div id="GameBoard">
  <div class="boxes"></div>
  <div class="boxes"></div>
  <div class="boxes"></div>
  <div class="boxes"></div>
  <div class="boxes"></div>
  <div class="boxes"></div>
  <div class="boxes"></div>
  <div class="boxes"></div>
  <div class="boxes"></div>
</div>
</div>
</div>
`;
};

//Función de estructura HTML Game

const renderBoardGame = () => {
  container.innerHTML = getBoardGameHTML(game);
};

const handleBoardGameClick = (e) => {
  console.log(e.currentTarget);

  let algo = 1;
  verifyBoardGame(algo);
};

const verifyBoardGame = (e) => {
  if (e == 1) {
    game.winner = game.player1.name;
    renderWinner();
    setWinnerUiEventos();
  } else {
    game.winner = game.player1.name;
    renderWinner();
    setWinnerUiEventos();
  }
};

// evento

const setBoardGameUiEventos = () => {
  const boxes = document.querySelectorAll(".boxes");

  for (const box of boxes) {
    box.addEventListener("click", handleBoardGameClick);
  }
};

//  GAME

let turno1 = false;
const isBoxEmpty = (box) => {
  return box == "";
};
const manageClick = (element) => {
  const htmlBoxes = document.querySelectorAll(".boxes");
  // const mapBoxes = [];

  console.log(isBoxEmpty(element.innerHTML));
  if (isBoxEmpty(element.innerHTML)) {
    if (turno1) {
      element.innerHTML = '<img src="img/O.png">';
      playerName = game.player1.name;
    } else {
      element.innerHTML = '<img src="img/X.png">';
      playerName = game.player2.name;
    }
    turno1 = !turno1;

    checkWinner(playerName, htmlBoxes);
  }
};

const register = () => {
  const htmlBoxes = document.querySelectorAll(".boxes");
  for (let i = 0; i < htmlBoxes.length; i++) {
    htmlBoxes[i].addEventListener("click", (event) => {
      const element = event.target;
      manageClick(element);
    });
  }
};
