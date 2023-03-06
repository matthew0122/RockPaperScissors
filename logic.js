const buttons = document.querySelectorAll("button.choice");
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
    if(compWin == 3){
        console.log("You lose, sad");
    }
    else if(playerWin == 3){
        console.log("You win,nice");
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

function game() {
    let playerWin = 0;
    let compWin = 0;
    while(compWin < 3 && playerWin < 3){
        result
        if (result[4] == 'W'){
            playerWin++;
        }
        else if(result[4] == 'L'){
            compWin++;
        }
    }
    if(compWin == 3){
        console.log("You lose, sad");
    }
    else{
        console.log("You win,nice");
    }
}