/*-----------------------------------Start Button-------*/
const startButton = document.getElementById("start-btn");

const questContainerElement = document.getElementById("question-container");

startButton.addEventListener("click", startGame);


/*-----------------------------------Starting Game-------*/
function startGame() {
    console.log("started");
}


/*-----------------------------------Seting Next Question-------*/
function nextQuestion () {
}


/*-----------------------------------Selecting Answer-------*/
function selectAnswer() {

}


const questions = [
    {
        question: "Who has scored the most Premier League goals?",
        answers: [
            {
                text: "Alan Shearer",
                correct: true
            },
            {
                text: "Wayne Rooney",
                correct: false
            }
        ]
    }
];