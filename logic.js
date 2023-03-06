const buttons = document.querySelectorAll("button.choice");
const results = document.createElement('div');
const tempdiv = document.createElement('div');
const finalRes = document.createElement('div');
const playAgain = document.createElement('button');

let playerWin = 0;
let compWin = 0;
playAgain.innerText = "Play again?";



playAgain.addEventListener("click", newGame);
buttons.forEach(element => {
    element.addEventListener("click", playGame);
});

function newGame(){
    buttons.forEach(element => {
        element.addEventListener("click", playGame);
    });
    playerWin = 0;
    compWin = 0;
    results.innerText = `Player: ${playerWin}\n Computer: ${compWin}`;
    document.body.removeChild(finalRes);
    document.body.removeChild(playAgain);
    tempdiv.innerText = "";
}
function playGame(e){
    let result = playRound(this.id, getComputerChoice());
    if (result[4] == 'W'){
        playerWin++;
    }
    else if(result[4] == 'L'){
        compWin++;
    }
    results.innerText = `Player: ${playerWin}\n Computer: ${compWin}`;
    if(compWin == 3){
        finalRes.innerText = "You lose, sad";
        document.body.append(finalRes);
        document.body.append(playAgain);
        buttons.forEach(element => {
            element.removeEventListener("click", playGame);
        });
    }
    else if(playerWin == 3){
        finalRes.innerText = "You win,nice";
        document.body.append(finalRes);
        document.body.append(playAgain);
        buttons.forEach(element => {
            element.removeEventListener("click", playGame);
        });
    }
    
}

function getComputerChoice() {
    let num = Math.random() * 100;
    if(num > 67){
        console.log("rpck");
        return "Rock";
    }
    else if (num > 33){
        console.log("paper");
        return "Paper";
    }
    else {
        console.log("scissors");
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    tempdiv.innerText = `${playerSelection} vs ${computerSelection}`;
    if(playerSelection == "Rock"){
        switch(computerSelection){
            case "Rock":
                return "You Tie!";
                break;
            case "Paper":
                return "You Lose!";
                break;
            case "Scissors":
                return "You Win!";
                break;
        }
    }
    else if(playerSelection == "Scissors"){
        switch(computerSelection){
            case "Rock":
                return "You Lose!";
                break;
            case "Paper":
                return "You Win!";
                break;
            case "Scissors":
                return "You Tie!";
                break;
        }
    }
    else if(playerSelection == "Paper"){
        switch(computerSelection){
            case "Rock":
                return "You Win!";
                break;
            case "Paper":
                return "You Tie!";
                break;
            case "Scissors":
                return "You Lose!";
                break;
        }
    }
}

document.body.append(tempdiv);
document.body.append(results);
