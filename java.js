// create a function called Computerplay
function Computerplay() {
    //generate random number from 1 to 3 and store it into a var
    let ran = Math.ceil(Math.random() * 3);
    //if the var is equal to one then print rock
    if (ran == 1)
        return "rock";
    // if equal to 2 print paper
    else if (ran == 2)
        return "paper";
    //if equal to 3 print scissors
    else
        return "scissors";
}


//create a function called game that takes two parameters the players selection and the computers selection
function compare(player, computer) {
    //if copmuter equals to players then print tie 
    //if computer is rock and player is paper OR if computer is paper and player is scissors OR 
    //is computer is scissors and plater is rock print you win 
    //else print you lose
    if (player == computer) {
        results.textContent = `Round results:  its a tie you both choose ${computer}`;
        return 0;
    }
    else if (computer == "rock" && player == "paper" || computer == "paper" && player == "scissors" || computer == "scissors" && player == "rock") {
        results.textContent = `Round results:  You Win! ${player} beats ${computer}`;
        return 1;
    }
    else {
        results.textContent = `Round results:  You Lose! ${computer} beats ${player}`;
        return -1;
    }
}
const gameRe = document.querySelector('#game')
const cscore = document.querySelector('#cscore');
const pscore = document.querySelector('#pscore');
const results = document.querySelector('#RoundResults')
const buttons = document.querySelectorAll('button');
// function playerSelection() {
//     scissors.addEventListener('click', () => {
//         compare('scissors', Computerplay());
//     })
//     paper.addEventListener('click', (e) => {
//         compare('paper', Computerplay());
//     })
//     rock.addEventListener('click', () => {
//         compare('rock', Computerplay());
//     })
// }

// const play = document.querySelector('.start')
// play.addEventListener('click', () => {
//     game();
// })
function game() {
    let Pscore = 0;
    let Cscore = 0;
    let no = 0
    pscore.textContent = `Player Score = ${Pscore}`
    cscore.textContent = `Computer score = ${Cscore}`
    results.textContent = `Round results: `;

    buttons.forEach((botton) => {
        botton.addEventListener('click', function (e) {
            let re = compare(e.target.id, Computerplay())
            if (re == 1) {
                Pscore++;
                pscore.textContent = `Player Score = ${Pscore}`
            }
            else if (re == -1) {
                Cscore++;
                cscore.textContent = `Computer score = ${Cscore}`
            }
            if (Pscore == 5) {
                gameRe.textContent = "Player Has won"
            }
            else if (Cscore == 5) {
                gameRe.textContent = "Computer  Has won"

            }

        })

    })

    //     for (let i = 1; i <= 2; i++) {
    //         if (
    //               scissors.addEventListener('click', () => {
    //                 if (compare('scissors', Computerplay()) == 1)
    //                     return console.log("hi")
    //             }, false) ||

    //             paper.addEventListener('click', (e) => {
    //                 return compare('paper', Computerplay());
    //             }, false) == -1 ||

    //             rock.addEventListener('click', () => {
    //                 return compare('rock', Computerplay());
    //             }, false) == 1) {
    //             console.log("++"); break;
    //         }
    //         else if (paper.addEventListener('click', (e) => {
    //             return compare('paper', Computerplay());
    //         }) == -1 || scissors.addEventListener('click', () => {
    //             return compare('scissors', Computerplay());
    //         }) == -1 || rock.addEventListener('click', () => {
    //             return compare('rock', Computerplay());
    //         }) == -1) {
    //             Cscore++;

    //         } if (Pscore == 2)
    //             console.log("u lost")
    //         if (Cscore == 2)
    //             console.log("u won")
    //         break;
    //     }
}


game();

// let user = playerSelection();
// let comp = Computerplay();
// if (compare(user, comp) == 1) {
//     Pscore++;
// } else if (compare(user, comp) == -1) {
//     Cscore++;
// }
// if (Pscore == 5) {
//     console.log("Congrats, you have won")
//     break;
// }
// else if (Cscore == 5) {
//     console.log('unforunatly you lost.')
//     break;
// }
// else if (Cscore == 5 && Pscore == 5) {
//     console.log("Holyshit its a tie")
//     break;
// }