const buttons = document.querySelectorAll("button.choice");
const results = document.createElement('div');
const tempdiv = document.createElement('div');

let playerWin = 0;
let compWin = 0;;
buttons.forEach(element => {
    element.addEventListener("click", playGame);
});

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
        console.log("You lose, sad");
        playerWin = 0;
        compWin = 0;
    }
    else if(playerWin == 3){
        console.log("You win,nice");
        playerWin = 0;
        compWin = 0;
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