// console.log("Hello world from game!");

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question:
      "What nickname did Michael Jordan earn after winning the NBA Slam Dunk Content in 1987 and 1988?",
    choice1: "Black Momba",
    choice2: "Thunder Dunker",
    choice3: "His Airness",
    choice4: "Dream Machine",
    answer: 3,
  },
  {
    question:
      "How many NBA championships did Jordan win with the Chicago Bulls?",
    choice1: "8",
    choice2: "6",
    choice3: "4",
    choice4: "2",
    answer: 2,
  },
  {
    question:
      "How many points did Michael average in playoff games during his career?",
    choice1: "31.5 PPG",
    choice2: "27.6 PPG",
    choice3: "29.7 PPG",
    choice4: "33.4 PPG",
    answer: 4,
  },
  {
    question:
      "How many scoring titles did Michael Jordan win during his NBA career?",
    choice1: "8",
    choice2: "10",
    choice3: "6",
    choice4: "4",
    answer: 2,
  },
  {
    question: "What year did Jordan lead the NBA in scoring AND steals?",
    choice1: "1992-93",
    choice2: "1978-88",
    choice3: "1989-90",
    choice4: "All of these",
    answer: 4,
  },
  {
    question: "What jersey number did Jordan wear for most of his career?",
    choice1: "23",
    choice2: "12",
    choice3: "45",
    choice4: "35",
    answer: 1,
  },
  {
    question: "What did Jordan often display while driving to the basket?",
    choice1: "Bug eyes",
    choice2: "Sticking his tongue out",
    choice3: "Shaking his head",
    choice4: "Wagging his finger",
    answer: 2,
  },
  {
    question:
      "What family member did Jordan lose to a violent carjacking in 1993?",
    choice1: "Brother",
    choice2: "Sister",
    choice3: "Mother",
    choice4: "Father",
    answer: 4,
  },
  {
    question: "Why did Jordan abriuptly retire before the 1993-94 NBA season?",
    choice1: "To play football",
    choice2: "To play golf",
    choice3: "To play baseball",
    choice4: "to play hockey",
    answer: 3,
  },
  {
    question:
      "What film presents a fictionalized account of what happened between Jordan's initial retirement from the NBA in 1993 and his 1995 comeback?",
    choice1: "Space Jam",
    choice2: "Hoop Dreams",
    choice3: "Semi-Pro",
    choice4: "Like Mike",
    answer: 1,
  },
];

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //sends user to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // console.log(e.target);
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    getNewQuestion();
  });
});

startGame();
