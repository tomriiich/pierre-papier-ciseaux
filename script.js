let userScore = 0;
let computerScore = 0;

const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const pierre_div = document.querySelector("#pierre");
const papier_div = document.querySelector("#papier");
const ciseaux_div = document.querySelector("#ciseaux");

function getComputerChoice() {
    const choices = ["pierre", "papier", "ciseaux"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    const smallUserWord = "(mon choix)".fontsize(3).sup();
    const smallCompWord = "(choix de l'adversaire)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} contre ${computerChoice}${smallCompWord} ! Tu as gagné !`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "(mon choix)".fontsize(3).sup();
    const smallCompWord = "(choix de l'adversaire)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} contre ${computerChoice}${smallCompWord} ! Tu as perdu !`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "(mon choix)".fontsize(3).sup();
    const smallCompWord = "(choix de l'adversaire)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice}${smallUserWord} contre ${computerChoice}${smallCompWord} ! Égalité !`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pierreciseaux":
        case "papierpierre":
        case "ciseauxpapier":
            win(userChoice, computerChoice);
            break;
        case "pierrepapier":
        case "papierciseaux":
        case "ciseauxpierre":
            lose(userChoice, computerChoice);
            break;
        case "pierrepierre":
        case "papierpapier":
        case "ciseauxciseaux":  
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    pierre_div.addEventListener('click', () => game("pierre"));
    papier_div.addEventListener('click', () => game("papier"));
    ciseaux_div.addEventListener('click', () => game("ciseaux"));
}

main();