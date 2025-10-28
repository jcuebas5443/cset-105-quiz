Allquestions = [
    {
    question: "which planet is known as the Red Planet?",
    Options: ["Venus", "Mars", "Jupiter", "Saturn"],
    Answers: "Mars",
},
{
    question: "What is the largest organ in the human body?",
    Options: ["heart", "brain", "skin", "liver"],
    Answers: "skin"
},
{
    question: "What is the capital city of frances",
    Options: ["Rome", "Berlin", "London", "Paris"],
    Answers: "Paris",
},
{
    question: "How many letters are there in the English Alphabet?",
    Options: ["24", "25", "26", "27"],
    Answers: "26",
},
{
    question: "Which animal is famous for producing honey?",
    Options: ["Ant", "Wasp", "Butterfly", "Bee"],
    Answers: "Bee",
},
{
    question: "What is the main ingredient in guacamole?",
    Options: ["Tomato", "Avacado", "Lime", "Onion"],
    Answers: "Avocado",
},
{
    question: "How many seconds are in one minute?",
    Options: ["30", "50", "60", "100"],
    Answers: "60",
},
{
    question: "What colors is the ocean?",
    Options: ["Blue", "Yellow", "Green", "Res"],
    Answers: "Blue",
},
{
    question: "Who invented the light bulb?",
    Options: ["Alexander Grahham Bell", "Albert Einstein", "Issac Newton", "Thomas Edison"],
    Answers: "Thomas Edison",
},
{
    question: "What is 7 x 8",
    Options: ["49", "54", "48", "56"],
    Answers: "56",
}
]

let score = 0
let currentQuestionIndex = 0


const questionText = document.getElementById("Question");
const optionsContainer = document.getElementById("options");
const quizContainer = document.querySelector(".quizContainer");
const resultContainer = document.querySelector(".quizContainer-result");
const resultText = document.querySelector("#Result h3");
const  pageNumber = document.getElementById("page-number")
// Show a question
function showQuestion() {
    const q = Allquestions[currentQuestionIndex];
    questionText.textContent = q.question;

    const inputs = optionsContainer.querySelectorAll("input");
    const labels = optionsContainer.querySelectorAll("label");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false; // reset selection
        labels[i].textContent = q.Options[i];
    }
pageNumber.innerText = `${currentQuestionIndex+1}/${Allquestions.length}`
}

// Submit answer 
function submitAnswer() {
    const inputs = optionsContainer.querySelectorAll("input");
    let selectedIndex = -1;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) selectedIndex = i;
    }

    if (selectedIndex === -1) {
        alert("Please choose an answer!");
        return;
    }

    if (Allquestions[currentQuestionIndex].Options[selectedIndex] === Allquestions[currentQuestionIndex].Answers) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < Allquestions.length) {
        showQuestion();
    } else {
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        resultText.textContent = `You got ${score} out of ${Allquestions.length} right!`;
    }
}

// Restart quiz 
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
}


showQuestion();

