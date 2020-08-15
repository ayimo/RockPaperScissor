/*let computerScore=0;
	humanScore=0;

function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	} else if(randomNumber<.6666){
		botsWeapon="paper";
	} else if (randomNumber<.999){
		botsWeapon="rock";
	}
	return botsWeapon;
}

document.getElementById('rock').onclick = playerRock;
document.getElementById('paper').onclick = playerPaper;
document.getElementById('scissors').onclick = playerScissors;


function playerRock(){
	let botsWeapon=getRandomWeapon()//getRandomWeapon();
}
function playerPaper(){
		play("paper");
}
function playerScissors(){
		play("scissors");
}


if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += ("You tied.");
    }
}*/

let botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	let botsWeapon = getRandomWeapon();
		checkWhoWon(botsWeapon, "rock");
}
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	let botsWeapon=getRandomWeapon();
		checkWhoWon(botsWeapon, "scissors");
}
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	let	botsWeapon=getRandomWeapon();
		checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	} else if(randomNumber<.6666){
		botsWeapon="paper";
	} else if (randomNumber<.999){
		botsWeapon="rock";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie.. boring! Booo!!");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Hah, you're a loser!");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Yay woohoo! You win!")

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
