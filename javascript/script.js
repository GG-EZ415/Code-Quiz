const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('quizHeader')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var questionIndex = 0;
var timer = document.getElementById('count');

var clockId;

let shuffledQuestions, currentQuestionIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })
// function startGame() {
//   startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion(shuffledQuestions, currentQuestionIndex)
//   setNextQuestion()
// }

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('wrong')
  element.classList.remove('correct')
}


const quizData = [
    {
        question: "What is 14 times 14?",
        choices: ["189","157","196","none of the above"],
        answer: "196"
        
    },
    {
        question: "What is 17 times 20?",
        choices: ["340","345","325", "350"],
        answer: "340"
    },
    {
        question: "What is 38 times 4?",
        choices: ["152", "162", "142","none of the above"],
        answer: "152"
    },
    {
        question: "What 47 Time 15?",
        choices: ["700", "675", "715", "none of the above"],
        answer: "none of the above"
    },
];

var time = quizData.length * 16;

function start() {
  // hide start screen
  var startScreen = document.getElementById('rules');
  startScreen.setAttribute("class","hide");
  // make questions visible
  questionContainerElement.removeAttribute("class");
    startClock();
};
startButton.onclick = start;


function startClock() {
  time--;
  timer.textContent = time;
  if (time <= 0) {
    // clear the interval, stop timer, then show final score and hide questions
    endQuiz();
  }
}
  
// question logic: create a function
// get current question from object arrray
// update the HTML question element with the current question using '.textContent.question'
// create a for loop to dynamicly append new choices for each question
// check answers 