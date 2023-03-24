// Single Page Application

// definiciones
const container = document.getElementById("container");

document.getElementById("player_human").addEventListener("click", () => {
  renderStartGame();
  setStartGameUiEventos();
});

// players

const game = {
  player1: {
    name: null,
    // mark: '<img src="mifigurita.png">',
  },

  player2: {
    name: null,
    // mark: '<img src="mifigurita2.png">',
  },
  winner: null,
  // image: '<img src="img/dumbledore-icon.jpg" class="img">',
};

//Función de estructura HTML de la vista Principal

const getStartGame = () => {
  return `
   <div class="input-cont">
   <div class="input-grid">
     <div class="input-grid-1">
       <input type="text" placeholder="first player name" id="player1"/>
     </div>
     <div class="input-grid-2">
       <input type="text" placeholder="second player name" id="player2"/>
     </div>
    
   </div>
   <button id="player-button">Start Playing</button>
 </div>`;
};

//Función que coge el valor de los inputs
const setStartGameUiEventos = () => {
  document.getElementById("player-button").addEventListener("click", () => {
    const name1Input = document.getElementById("player1").value;
    const name2Input = document.getElementById("player2").value;
    console.log("human");
    //Validar

    //actualizar
    game.player1.name = name1Input;
    game.player2.name = name2Input;

    //renderizar vista game
    renderBoardGame();
    setBoardGameUiEventos();
  });
};

//Función de estructura HTML Start
const renderStartGame = () => {
  container.innerHTML = getStartGame();
};





// PLAYER VS BOT

document.getElementById("player_bot").addEventListener("click", () => {
  renderBotGame();
  setBotGameUiEventos();
});

const getBotGame = () => {
  return `
      <div class="input-cont">
         <div class="input-grid">
          <div class="input-grid-1">
             <p id="bot-title">PLAY AGAINST THE BOT</p>
             <input type="text" placeholder="player name" id="player-bot />
          </div>
         </div>
         <button id="bot-button">Start Playing</button>
       </div>`;
};

const setBotGameUiEventos = () => {
  document.getElementById("bot-button").addEventListener("click", () => {
    const botNameInput = document.getElementById("player-bot").value;

    console.log("bot");

    // game.player-bot.name = botNameInput;

    renderBoardGame();
    setBoardGameUiEventos();
  });
};

const renderBotGame = () => {
  container.innerHTML = getBotGame();
};


