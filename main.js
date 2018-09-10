//Array of random die images 1-6
const randomImages= new Array ('images/dice/1.png', 'images/dice/2.png','images/dice/3.png','images/dice/4.png', 'images/dice/5.png','images/dice/6.png');
const roundCounter = 0 //counter for rounds

//Arays with die values for roll1 roll2, roll3
const roll1Array = [];
const roll2Array = [];
const roll3Array = [];

//Add Event listners to Roll Dice Button to randomize images
const rollDiceClick = document.getElementById("#roll-dice-btn");
rollDiceClick.addEventListener("click", changeSourceD1);
rollDiceClick.addEventListener("click", changeSourceD2);
rollDiceClick.addEventListener("click", changeSourceD3);
rollDiceClick.addEventListener("click", changeSourceD4);
rollDiceClick.addEventListener("click", changeSourceD5);


//Randomize die image and returns value of card in first-die-slot column
function changeSourceD1() {
    const d1 = document.querySelector('#first-die-slot');
    const randomDieValue1 = Math.floor((randomImages.length-1)*Math.random());
    const source1 = document.querySelector('#first-die-slot').setAttribute('src',randomImages[randomDieValue1])
    console.log(randomDieValue1 +1);
    roll1Array.push(randomDieValue1 +1)[0];
    return randomDieValue1 +1;
}

//Randomize die image and returns value of card in second-die-slot column
function changeSourceD2() {
    const d2 = document.querySelector('#second-die-slot');
    const randomDieValue2 = Math.floor((randomImages.length-1)*Math.random());
    const source2 = document.querySelector('#second-die-slot').setAttribute('src',randomImages[randomDieValue2])
    console.log(randomDieValue2 +1);
    roll1Array.push(randomDieValue2 +1)[1];
    return randomDieValue2 +1;

}

//Randomize die image and returns value of card in third-die-slot column
function changeSourceD3() {
    const d3 = document.querySelector('#third-die-slot');
    const randomDieValue3 = Math.floor((randomImages.length-1)*Math.random());
    const source3 = document.querySelector('#third-die-slot').setAttribute('src',randomImages[randomDieValue3])
    console.log(randomDieValue3 +1);
    roll1Array.push(randomDieValue3 +1)[2];
    return randomDieValue3 +1;
}


//Randomize die image and returns value of card in fourth-die-slot column
function changeSourceD4() {
    const d4 = document.querySelector('#fourth-die-slot');
    const randomDieValue4 = Math.floor((randomImages.length-1)*Math.random());
    const source4 = document.querySelector('#fourth-die-slot').setAttribute('src',randomImages[randomDieValue4])
    console.log(randomDieValue4 +1);
    roll1Array.push(randomDieValue4 +1)[3];
    return randomDieValue4 +1;
}


//Randomize die image and returns value of card in fifth-die-slot column
function changeSourceD5() {
    const d5 = document.querySelector('#fifth-die-slot');
    const randomDieValue5 = Math.floor((randomImages.length-1)*Math.random());
    const source5 = document.querySelector('#fifth-die-slot').setAttribute('src',randomImages[randomDieValue5])
    console.log(randomDieValue5 +1);
    roll1Array.push(randomDieValue5 +1)[4];
    return randomDieValue5 +1;
}

function toggleButton() {
  // Check to see if the button is pressed
  const toggleOn = document.querySelector('#first-die-hold-button', '#second-die-hold-slot', '#third-die-hold-slot', '#fourth-die-hold-slot', '#fifth-die-hold-slot');
  const pressed = (toggleOn.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  toggleOn.setAttribute("aria-pressed", !pressed);
  console.log("Keep Last element")
}

