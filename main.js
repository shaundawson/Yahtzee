

// const diceImgArray = document.querySelectorAll("#first-die-slot, #second-die-slot, #third-die-slot, #fourth-die-slot, #fifth-die-slot");

const firstDieImg =  document.querySelector('#first-die-slot');
const secondDieImg =  document.querySelector('#second-die-slot');
const thirdDieImg =  document.querySelector('#third-die-slot');
const fourthDieImg =  document.querySelector('#fourth-die-slot');
const fifthDieImg =  document.querySelector('#fifth-die-slot');

//Add Event listner to Roll Dice Button
 let rollDiceClick = document.getElementById("#roll-dice-btn");
 rollDiceClick.addEventListener("click", randomDice);


  //Generate random number 1-6
  function rollDice() {
  const randomDice = Math.floor(6*Math.random())+1;
  console.log(randomDice);
  }
