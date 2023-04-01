// Single Page Application

// definiciones
const container = document.getElementById("container");

const board = {
  boxes: ["", "", "", "", "", "", "", "", ""],
};
// players

const playersBtn = {
  player1: {
    name: null,
    mark: '<img src="./img/X.png" alt="X" id="X">',
  },

  player2: {
    name: null,
    mark: '<img src="./img/O.png" alt="O" id="O">',
  },

  winner: null,
};

//Función de estructura HTML de la Pagina Principal

const uiIndex = () => {
  return `
 <div class="box-players">
      <div class="logo-box">
        <img id="logo" src="img/logo.png" alt="logo" />
      </div>
      <div class="player-1">
        <button id="player_vs_player">
          <img src="img/player.png" id="user-icon" /> VS
          <img src="img/player.png" id="user-icon" class="choose" />
        </button>
        <p id="tris">TIC TAC TOE</p>
      </div>
      <div class="player-2">
        <button id="player_vs_bot">
          <img src="img/player.png" id="user-icon" /> VS
          <img src="img/robot.png" id="bot-icon" class="choose" />
        </button>
      </div>
    </div>
 `;
};

const renderIndex = () => {
  container.innerHTML = uiIndex();
};

renderIndex();
