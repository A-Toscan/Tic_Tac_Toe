//  Player VS Player Input page

const uiPlayersInput = () => {
  return `
   <div class="input-cont" id="input-container">
   <div class="input-grid">
     <div class="input-grid-1">
       <input type="text" placeholder="first player name" id="player1"/>
     </div>
     <div class="input-grid-2">
       <input type="text" placeholder="second player name" id="player2"/>
     </div>
    
   </div>
   <button id="start-player-button">Start Playing</button>
 </div>

 <!-- STARTING THE GAME BOARD -->


 <div class="game-container" id="game-container" style="display:none">
 <div class="mainPage">
 <div class="headerBtns">

   <div class="turns" >
   
   <div class="current-turn" id="player1-icon">
       <button id="X-Turn">
     <img src="img/player.png" alt="player" class="player1_turn" id="player1_turn"
     />
   </button>
   </div>


   <div  id="player2-icon">
       <button id="O-Turn">
     <img src="img/player.png" alt="bot" class="player2_turn" id="player2_turn"
     />
   </button></div>
 </div>
   
 </div>
 
 
 <div id="info">
 <div id="first-player-name"></div>
 <div id="second-player-name"></div>
 </div>
 
 
 <div id="GameBoard" >
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

///////////////////  Get Players name Structure    //////////////////////

const getPlayerNames = () => {
  // Get names value
  let namePlayer1 = document.getElementById("player1").value;
  let namePlayer2 = document.getElementById("player2").value;

  // Store values on game object
  playersBtn.player1.name = namePlayer1;
  playersBtn.player2.name = namePlayer2;
};

// RENDER PLAYER NAMES FUNCTION
const renderPlayerNames = () => {
  getPlayerNames();
  const player1_turn = document.getElementById("first-player-name");
  const player2_turn = document.getElementById("second-player-name");
  const inputContainer = document.getElementById("input-container");

  player1_turn.innerText = playersBtn.player1.name;
  player2_turn.innerText = playersBtn.player2.name;

  // Hide name input window to show the board
  inputContainer.style.display = "none";

  const gameContainer = document.getElementById("game-container");
  gameContainer.style.display = "block";
};

//   GAME FUNCTIONALITY

const gameFunction = () => {
  const uiBoxes = document.querySelectorAll(".boxes");
  const mapBoxes = [];
  let turno1 = true;

  const manageClick = (markBox, index) => {
    const player1Icon = document.getElementById("player1-icon");
    const player2Icon = document.getElementById("player2-icon");

    if (markBox.innerHTML == "") {
      if (turno1) {
        markBox.innerHTML = playersBtn.player1.mark;
        player1Icon.classList.add("current-turn");
        player2Icon.classList.remove("current-turn");
        board.boxes[index] = "X";
      } else {
        markBox.innerHTML = playersBtn.player2.mark;
        player2Icon.classList.add("current-turn");
        player1Icon.classList.remove("current-turn");
        board.boxes[index] = "O";
      }

      turno1 = !turno1;

      checkWinner(board.boxes[index], board.boxes);
    }
  };

  for (let i = 0; i < uiBoxes.length; i++) {
    uiBoxes[i].addEventListener("click", (event) => {
      const boxTarget = event.target;
      manageClick(boxTarget, i);
    });
  }
};

// RENDER BOARD FUNCTION
const renderBoard = () => {
  const buttonPlVsPl = document.getElementById("player_vs_player");
  buttonPlVsPl.addEventListener("click", () => {
    container.innerHTML = uiPlayersInput();

    document
      .getElementById("start-player-button")
      .addEventListener("click", renderPlayerNames);

    gameFunction();
    board.boxes = ["", "", "", "", "", "", "", "", ""];
  });
};

//  CALL TO RENDER BOARD FUNCTION
renderBoard();
