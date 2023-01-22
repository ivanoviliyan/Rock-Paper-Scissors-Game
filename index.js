let playerTurn = '';

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
let computerTurn = Math.floor(Math.random() * 3 + 1);

rockBtn.addEventListener('click', () => {
	playerTurn = 1; //rock
	if (computerTurn === 1) {
		console.log('draw'); // 1 = rock -> draw
	} else if (computerTurn === 2) {
		console.log(`computer win, he picks paper`); // 2 = paper -> win
	} else if (computerTurn === 3) {
		console.log(`you win, computer picks scissors`); // 3 = scissors -> lose
	}
});
paperBtn.addEventListener('click', () => {
	playerTurn = 2; //paper
	if (computerTurn === 2) {
		console.log('draw');
	}
});
scissorsBtn.addEventListener('click', () => {
	playerTurn = 3; //scissors
	if (computerTurn === 3) {
		console.log('draw');
	}
});
