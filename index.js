const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const computerSpan = document.getElementById('computer-wins');
const playerSpan = document.getElementById('player-wins');
const output = document.getElementById('output');
const restartBtn = document.getElementById('restart-btn');
const weaponMsg = document.getElementById('weapon-msg');
restartBtn.style.display = 'none';

let computerWins = 0;
let playerWins = 0;
let playerTurn;
let messege = '';

let computerTurn = () => {
	return Math.floor(Math.random() * 3 + 1);
};

let print = () => {
	output.textContent = messege;
	computerSpan.textContent = computerWins;
	playerSpan.textContent = playerWins;
};

restartBtn.addEventListener('click', () => {
	location.reload();
});

rockBtn.addEventListener('click', () => {
	playerTurn = 1; //rock
	if (computerTurn() === 1) {
		messege = `Draw! The computer also choose a rock.`; // 1 = rock -> draw
	} else if (computerTurn() === 2) {
		messege = `The computer win because it choose a paper.`; // 2 = paper -> win
		computerWins++;
	} else if (computerTurn() === 3) {
		messege = `You win because the computer choose a scissors.`; // 3 = scissors -> lose
		playerWins++;
	}
	weaponMsg.style.display = 'none';
	restartBtn.style.display = 'block';
	print();
});
paperBtn.addEventListener('click', () => {
	playerTurn = 2; //paper
	if (computerTurn() === 2) {
		messege = 'Draw! The computer also choose a paper.'; // 1 = paper -> draw
	} else if (computerTurn() === 1) {
		messege = `You win because the computer choose a rock.`; // 2 = rock -> win
		playerWins++;
	} else if (computerTurn() === 3) {
		messege = `The computer win because it choose a scissors`; // 3 = scissors -> lose
		computerWins++;
	}
	weaponMsg.style.display = 'none';
	restartBtn.style.display = 'block';
	print();
});
scissorsBtn.addEventListener('click', () => {
	playerTurn = 3; //scissors
	if (computerTurn() === 3) {
		messege = 'Draw! The computer also choose a scissors.'; // 1 = scissors -> draw
	} else if (computerTurn() === 1) {
		messege = `The computer win because it choose a rock.`; // 2 = rock -> win
		computerWins++;
	} else if (computerTurn() === 2) {
		messege = `You win because the computer choose a paper.`; // 3 = paper -> lose
		playerWins++;
	}
	weaponMsg.style.display = 'none';
	restartBtn.style.display = 'block';
	print();
});
