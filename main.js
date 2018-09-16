//Array of random die images 1-6
const randomImages = new Array(
  "images/dice/1.png",
  "images/dice/2.png",
  "images/dice/3.png",
  "images/dice/4.png",
  "images/dice/5.png",
  "images/dice/6.png"
);

let counter = 0;


//Array with held and current die values
const roll1Array = new Array();

// Add Event listners to Roll Dice Button to randomize images.
function rollDice() {
  const rollDiceClick = document.getElementById("#roll-dice-btn");
  rollDiceClick.addEventListener("click", checkMaxRolls);
  rollDiceClick.addEventListener("click", increment);
  rollDiceClick.addEventListener("click", finalArray);
  rollDiceClick.addEventListener("click", changeSourceD1);
  rollDiceClick.addEventListener("click", changeSourceD2);
  rollDiceClick.addEventListener("click", changeSourceD3);
  rollDiceClick.addEventListener("click", changeSourceD4);
  rollDiceClick.addEventListener("click", changeSourceD5);
}

function increment() {
  `${counter++}`;
  if (counter > 0 && counter <= 3) {
    console.log(`Roll ${counter} of 3`);
  }
}

//Resets round
function checkMaxRolls() {
  if (counter > 3) {
    counter = 0;
    `${counter++}`;
    console.log(`Roll ${counter} of 3`);
  }
}

//Returns final array
function finalArray() {
  if (counter === 3) {
    alert(`You held ${roll1Array}`);
  }
}

//Randomize die image and returns value of die in first-die-slot column
function changeSourceD1() {
  const d1 = document.querySelector("#first-die-slot");
  const toggleOn1 = document.querySelector("#first-die-hold-button");
  let pressed1 = toggleOn1.getAttribute("aria-pressed") === "false";
  if (toggleOn1.getAttribute("aria-pressed") === "true") {
    return roll1Array[0];
  }
  const randomDieValue1 = Math.floor((randomImages.length - 1) * Math.random());
  const source1 = document
    .querySelector("#first-die-slot")
    .setAttribute("src", randomImages[randomDieValue1]);
  console.log(`The first die is a ${randomDieValue1 + 1}`);
  roll1Array[0] = randomDieValue1 + 1;
  return randomDieValue1 + 1;
}

//Randomize die image and returns value of die in second-die-slot column
function changeSourceD2() {
  const d2 = document.querySelector("#second-die-slot");
  const toggleOn2 = document.querySelector("#second-die-hold-button");
  let pressed2 = toggleOn2.getAttribute("aria-pressed") === "false";
  if (toggleOn2.getAttribute("aria-pressed") === "true") {
    return roll1Array[1];
  }
  const randomDieValue2 = Math.floor((randomImages.length - 1) * Math.random());
  const source2 = document
    .querySelector("#second-die-slot")
    .setAttribute("src", randomImages[randomDieValue2]);
  console.log(`The second die is a ${randomDieValue2 + 1}`);
  roll1Array[1] = randomDieValue2 + 1;
  return randomDieValue2 + 1;
}

//Randomize die image and returns value of die in third-die-slot column
function changeSourceD3() {
  const d3 = document.querySelector("#third-die-slot");
  const toggleOn3 = document.querySelector("#third-die-hold-button");
  let pressed3 = toggleOn3.getAttribute("aria-pressed") === "false";
  if (toggleOn3.getAttribute("aria-pressed") === "true") {
    return roll1Array[2];
  }
  const randomDieValue3 = Math.floor((randomImages.length - 1) * Math.random());
  const source3 = document
    .querySelector("#third-die-slot")
    .setAttribute("src", randomImages[randomDieValue3]);
  console.log(`The third die is a ${randomDieValue3 + 1}`);
  roll1Array[2] = randomDieValue3 + 1;
  return randomDieValue3 + 1;
}

//Randomize die image and returns value of die in fourth-die-slot column
function changeSourceD4() {
  const d4 = document.querySelector("#fourth-die-slot");
  const toggleOn4 = document.querySelector("#fourth-die-hold-button");
  let pressed4 = toggleOn4.getAttribute("aria-pressed") === "false";
  if (toggleOn4.getAttribute("aria-pressed") === "true") {
    return roll1Array[3];
  }
  const randomDieValue4 = Math.floor((randomImages.length - 1) * Math.random());
  const source4 = document
    .querySelector("#fourth-die-slot")
    .setAttribute("src", randomImages[randomDieValue4]);
  console.log(`The fourth die is a ${randomDieValue4 + 1}`);
  roll1Array[3] = randomDieValue4 + 1;
  return randomDieValue4 + 1;
}

//Randomize die image and returns value of die in fifth-die-slot column
function changeSourceD5() {
  const d5 = document.querySelector("#fifth-die-slot");
  const toggleOn5 = document.querySelector("#fifth-die-hold-button");
  let pressed5 = toggleOn5.getAttribute("aria-pressed") === "false";
  if (toggleOn5.getAttribute("aria-pressed") === "true") {
    return roll1Array[4];
  }
  const randomDieValue5 = Math.floor((randomImages.length - 1) * Math.random());
  const source5 = document
    .querySelector("#fifth-die-slot")
    .setAttribute("src", randomImages[randomDieValue5]);
  console.log(`The fifth die is a ${randomDieValue5 + 1}`);
  roll1Array[4] = randomDieValue5 + 1;
  return randomDieValue5 + 1;
}

// Check to see if the hold button is pressed in first-die-slot column
function toggleButtonOne() {
  const toggleOn1 = document.querySelector("#first-die-hold-button");
  let pressed1 = toggleOn1.getAttribute("aria-pressed") === "false";
  if (toggleOn1.getAttribute("aria-pressed") === "true") {
    return roll1Array[0];
  }
  // Change aria-pressed to the opposite state
  toggleOn1.setAttribute("aria-pressed", !pressed1);
  (indexToInsertNewElementAt = roll1Array[0]),
    (elementToInsert = roll1Array[0]);
  alert(`You held a ${elementToInsert}`);
  console.log(`You held a ${elementToInsert}`);
}

// Check to see if the hold button is pressed in second-die-slot column
function toggleButtonTwo() {
  const toggleOn2 = document.querySelector("#second-die-hold-button");
  let pressed2 = toggleOn2.getAttribute("aria-pressed") === "false";
  if (toggleOn2.getAttribute("aria-pressed") === "true") {
    return;
  }
  // Change aria-pressed to the opposite state
  toggleOn2.setAttribute("aria-pressed", !pressed2);
  (indexToInsertNewElementAt = roll1Array[1]),
    (elementToInsert = roll1Array[1]);
  alert(`You held a ${elementToInsert}`);
}

// Check to see if the hold button is pressed in third-die-slot column
function toggleButtonThree() {
  const toggleOn3 = document.querySelector("#third-die-hold-button");
  const pressed3 = toggleOn3.getAttribute("aria-pressed") === "false";
  // Change aria-pressed to the opposite state
  toggleOn3.setAttribute("aria-pressed", !pressed3);
  (indexToInsertNewElementAt = roll1Array[2]),
    (elementToInsert = roll1Array[2]),
    alert(`You held a ${elementToInsert}`);
}

// Check to see if the hold button is pressed in fourth-die-slot column
function toggleButtonFour() {
  const toggleOn4 = document.querySelector("#fourth-die-hold-button");
  const pressed4 = toggleOn4.getAttribute("aria-pressed") === "false";
  // Change aria-pressed to the opposite state
  toggleOn4.setAttribute("aria-pressed", !pressed4);
  (indexToInsertNewElementAt = roll1Array[3]),
    (elementToInsert = roll1Array[3]);
  alert(`You held a ${elementToInsert}`);
}

// Check to see if the hold button is pressed in fifth-die-slot column
function toggleButtonFive() {
  const toggleOn5 = document.querySelector("#fifth-die-hold-button");
  const pressed5 = toggleOn5.getAttribute("aria-pressed") === "false";
  // Change aria-pressed to the opposite state
  toggleOn5.setAttribute("aria-pressed", !pressed5);
  (indexToInsertNewElementAt = roll1Array[4]),
    (elementToInsert = roll1Array[4]);
  alert(`You held a ${elementToInsert}`);
}




/* function calculatePoints(){
  calculateOnes();
  calculateTwos();
  calculateThrees();
  calculateFours();
  calculateFives();
  calculateSixes();

  calculateThreeOfAKind();
  calculateFourOfAKind();
  calculateFullHouse();
  calculateSmallStraight();
  calculateLargeStraight();
  calculateYahtzee();
  calculateChance();

  calculateAll();

}

*/





