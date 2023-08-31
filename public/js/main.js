const data = [
	{
		id: 1,
		question: 'Which of these fish is actually a fish?',
		answers: [
			{ answer: 'swordfish', isCorrect: true },
			{ answer: 'jellyfish', isCorrect: false },
			{ answer: 'starfish', isCorrect: false },
			{ answer: 'crayfish', isCorrect: false },
		],
	},
	{
		id: 2,
		question: 'A flutter is a group of:',
		answers: [
			{ answer: 'bees', isCorrect: false },
			{ answer: 'penguins', isCorrect: false },
			{ answer: 'butterflies', isCorrect: true },
			{ answer: 'camels', isCorrect: false },
		],
	},
	{
		id: 1,
		question: 'A group of which animals is referred to as a wake?',
		answers: [
			{ answer: 'bats', isCorrect: false },
			{ answer: 'vultures', isCorrect: true },
			{ answer: 'ants', isCorrect: false },
		],
	},
];
// define global variables that will be used in html
const gameScreen = document.querySelector('.gameScreen');
const resultScreen = document.querySelector('.resultScreen');
const question = document.querySelector('.question');
const answers = document.querySelector('.answers');
const submit = document.querySelector('.submitButton');
const replay = document.querySelector('.replayButton');

// define global variables that will change value
let qIndex = 0;
let wrongCount = 0;
let correctCount = 0;
let total = 0;
let selectedAnswer;

// create function that shows question and answers

const showQuestion = (qNum) => {
	question.textContent = data[qNum].question;
	answers.innerHTML = data[qNum].answers
		.map(
			(item, index) =>
				`
		<section class="answerField">
					<input name="answer" type="radio" id=${index} value=${item.isCorrect} />
					<label for=${index}>${item.answer}</label>
				</section>
		`
		)
		.join('');
};
showQuestion(qIndex);
