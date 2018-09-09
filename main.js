
//Array of random die images 1-6
const randomImages= new Array ("images/dice/1.png", "images/dice/2.png","images/dice/3.png", "images/dice/4.png", "images/dice/5.png","images/dice/6.png");

//Add Event listners to Roll Dice Button to
const rollDiceClick = document.getElementById("#roll-dice-btn");
rollDiceClick.addEventListener("click", changeSourceD1);
rollDiceClick.addEventListener("click", changeSourceD2);
rollDiceClick.addEventListener("click", changeSourceD3);
rollDiceClick.addEventListener("click", changeSourceD4);
rollDiceClick.addEventListener("click", changeSourceD5);


//Change img src of die1 img based on value returned
function changeSourceD1() {
    const d1 = document.querySelector('#first-die-slot');
    var randomNumber = Math.floor((randomImages.length-1)*Math.random());
    const source1 = document.querySelector('#first-die-slot').setAttribute('src',randomImages[randomNumber]);
}

//Change src of die2 img based on value returned
function changeSourceD2() {
    const d2 = document.querySelector('#second-die-slot');
    var randomNumber = Math.floor((randomImages.length-1)*Math.random());
    const source2 = document.querySelector('#second-die-slot').setAttribute('src',randomImages[randomNumber]);
}

//Change src of die3 img based on value returned
function changeSourceD3() {
    const d3 = document.querySelector('#third-die-slot');
    var randomNumber = Math.floor((randomImages.length-1)*Math.random());
    const source3 = document.querySelector('#fourth-die-slot').setAttribute('src',randomImages[randomNumber]);
}

//Change src of die4 img based on value returned
function changeSourceD4() {
    const d4 = document.querySelector('#fourth-die-slot');
    var randomNumber = Math.floor((randomImages.length-1)*Math.random());
    const source4 = document.querySelector('#fourth-die-slot').setAttribute('src',randomImages[randomNumber]);
}

//Change src of die5 img based on value returned
function changeSourceD5() {
    const d5 = document.querySelector('#fifth-die-slot');
    var randomNumber = Math.floor((randomImages.length-1)*Math.random());
    const source5 = document.querySelector('#fifth-die-slot').setAttribute('src',randomImages[randomNumber]);
}

