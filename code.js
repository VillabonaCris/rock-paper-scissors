let playGame = document.querySelector('#play');
let gameContainer = document.querySelector('.game-container');

playGame.addEventListener('click', () => {
  gameContainer.style.display = 'block';
});

const computerChoiseDisplay = document.querySelector('#computer-choise');
const yourChoise = document.querySelector('#your-choise');
const resultDisplay = document.querySelector('#result');
const posibleChoises = document.querySelectorAll('.game-button-container button');

const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');

let userChoise;
let computerChoise;
let result;


posibleChoises.forEach((posibleChoise) => posibleChoise.addEventListener('click', (event) => {
  userChoise = event.target.id;
  yourChoise.innerHTML = userChoise;
  generateComputerChoise();
  getResult(userChoise, computerChoise)
}));


function generateComputerChoise(){
  const randomNumber = Math.floor(Math.random()* posibleChoises.length) + 1
  
  if (randomNumber === 1) {
    computerChoise = 'rock';
  }
  if (randomNumber === 2) {
    computerChoise = 'paper';
  }
  if (randomNumber === 3) {
    computerChoise = 'scissor';
  }
  computerChoiseDisplay.innerHTML = computerChoise;
}

function getResult(userChoise, computerChoise){
  if(userChoise === computerChoise){
    result = 'its a draw!'
  }
  else if(userChoise === 'rock' && computerChoise === 'scissor'){
    result = 'you win!'
  } 
  else if(userChoise === 'paper' && computerChoise === 'rock'){
    result = 'you win!'
  }
  else if(userChoise === 'scissor' && computerChoise === 'paper'){
    result = 'you win!'
  }else {
    result = 'you lost!'
  }
  resultDisplay.innerHTML = result
}
