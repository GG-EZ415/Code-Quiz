const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion(shuffledQuestions, currentQuestionIndex)
  setNextQuestion()
}

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
        answers: [
        { a: "189", correct: false },
        { b: "157", correct: false },
        { c: "196", correct: true },
        { d: "none of the above", correct: false},
        ]
    },
    {
        question: "What is 17 times 20?",
        answers: [
        { a: "340", correct: true },
        { b: "345", correct: false },
        { c: "325", correct: false },
        { d: "350", correct: false },
        ]
    },
    {
        question: "What is 38 times 4?",
        answers: [
        { a: "152", correct: true },
        { b: "162", correct: false },
        { c: "142", correct: false },
        { d: "none of the above", correct: false },
        ]
    },
    {
        question: "What 47 Time 15?",
        answers: [
        { a: "700", correct: false },
        { b: "675", correct: false },
        { c: "715", correct: false },
        { d: "none of the above", correct: true },
        ]
    },
];



// tried to start one way of attacking this assignment
// const quiz = getElementById('quiz')
// const answerEls = document.querySelectorAll('.answer')
// const questionEl = getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')


// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz() {

//     deselectAnswers()

//     const currentQuizData = quizData[currentQuiz]

//     questionEl.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
// }

// function deselectAnswers() {
//     answerEls.forEach(answerEl => answerEl.checked = false)
// }

// function getSelected() {
//     let answer
//     answerEls.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     return answer;
// }


// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//        if(answer === quizData[currentQuiz].correct) {
//            score++
//        }

//        currentQuiz++

//        if(currentQuiz < quizData.length) {
//            loadQuiz()
//        } else {
//            quiz.innerHTML = `
//            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

//            <button onclick="location.reload()">Reload</button>
//            `
//        }
//     }
// })



//tried to have a start button feature that iniated a countdown

// $("#startClock").click(function startTimer(){
//     var counter = 3;
//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("count");
//         span.innerHTML = counter;
//       }
//       if (counter === 0) {
//           alert('Game Over');
//           clearInterval(counter);
//       }
//     }, 1000);
// })();
  
//     function start()
//   {
//       document.getElementById("count");
//       startTimer();
//   };
//   start();
