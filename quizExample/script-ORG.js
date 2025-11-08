const quizContainer = document.getElementById("quizContainer");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submitButton");
//const resetButton = document.getElementById('resetButton');
const resultsContainer = document.getElementById("results");

const questions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "London",
      b: "Paris",
      c: "Berlin",
    },
    correctAnswer: "b",
  },
  {
    question: "What is 2 + 2?",
    answers: {
      a: "3",
      b: "4",
      c: "5",
    },
    correctAnswer: "b",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function buildQuiz() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answersElement.innerHTML = ""; // Clear previous answers

  for (const letter in currentQuestion.answers) {
    const answerElement = document.createElement("label");
    answerElement.innerHTML = `<input type="radio" name="answer" value="${letter}"> ${letter}: ${currentQuestion.answers[letter]}`;
    answersElement.appendChild(answerElement);
  }
}

function showResults() {
  resultsContainer.innerHTML = `You scored ${score} out of ${questions.length} !`;
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      buildQuiz();
    } else {
      showResults();
      submitButton.disabled = true; // Disable submit button after quiz completion
      //resetButton.disable = false; // enable reset button to build quiz
    }
  }
}

buildQuiz();

submitButton.addEventListener("click", checkAnswer);
//resetButton.addEventListener('click', buildQuiz);
