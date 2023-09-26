//Variables to display the points of each player
let computerPointsDisplay =
	document.getElementsByClassName('computer-points')[0];

let userPointsDisplay = document.getElementsByClassName('user-points')[0];

//Variables for the weapons selection

const rockBlock = document.getElementsByClassName('rock-w')[0];
const paperBlock = document.getElementsByClassName('paper-w')[0];
const scissorsBlock = document.getElementsByClassName('scissors-w')[0];

let weaponToNumber = undefined;

const text = document.getElementsByClassName('text')[0];
const userWinner = 'You win!';
const computerWinner = 'You lose! - Computer wins!';
let myWeaponToNumber = undefined;

//Variables to initialize the points of each player
let points_of_computer = 0;
let points_of_user = 0;

//Random number
function randomNumber() {
	let computer = Math.trunc(Math.random() * 3 + 1);
	return computer;
}

//Process of the game
/*
1 = rock
2 = paper
3 = scissors
*/

function Process(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		alert(`It's it a tie`);
	} else if (
		(userChoice == 1 && computerChoice == 3) ||
		(userChoice == 2 && computerChoice == 1) ||
		(userChoice == 3 && computerChoice == 2)
	) {
		alert(`Point for the user!`);
		points_of_user += 1;
		userPointsDisplay.innerHTML = points_of_user;
	} else {
		alert(`Point for the computer!`);
		points_of_computer += 1;
		computerPointsDisplay.innerHTML = points_of_computer;
	}
	/* console.log('User: ', points_of_user);
	console.log('Computer: ', points_of_computer); */
	if (points_of_user >= 3 && points_of_computer < points_of_user) {
		text.innerHTML = userWinner;
		DisableWeaponSelection();
	} else if (points_of_computer >= 3 && points_of_computer > points_of_user) {
		text.innerHTML = computerWinner;
		DisableWeaponSelection();
	}
}

//Events for when the user selects a weapon
rockBlock.addEventListener('click', ToRock);

paperBlock.addEventListener('click', ToPaper);

scissorsBlock.addEventListener('click', ToScissors);

function DisableWeaponSelection() {
	paperBlock.removeEventListener('click', ToPaper);
	rockBlock.removeEventListener('click', ToRock);
	scissorsBlock.removeEventListener('click', ToScissors);
}

//Conversions
function ToRock() {
	weaponToNumber = 2;
	let computerWeapon = randomNumber();
	Process(weaponToNumber, computerWeapon);
}

function ToPaper() {
	weaponToNumber = 2;
	let computerWeapon = randomNumber();
	Process(weaponToNumber, computerWeapon);
}

function ToScissors() {
	weaponToNumber = 3;
	let computerWeapon = randomNumber();
	Process(weaponToNumber, computerWeapon);
}
