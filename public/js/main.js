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
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submitButton');
const replay = document.querySelector('.replayButton');

// define global variables that will change value
let qIndex = 0;
let wrongCount = 0;
let correctCount = 0;
let total = 0;
let answerStorage;

// create function that shows question and answers

const showQuestion = (qNum) => {
	answerStorage = null; //null catch, resets for each question
	question.textContent = data[qNum].question;
	answersContainer.innerHTML = data[qNum].answers
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

	selectAnswer();
};
// create click event and storing of answer value when choosing answer
const selectAnswer = () => {
	answersContainer.querySelectorAll('input').forEach((el) => {
		el.addEventListener('click', (e) => {
			answerStorage = e.target.value;
		});
	});
};

// create click event for submit button
// add condition for null answer
const submitAnswer = () => {
	submitButton.addEventListener('click', () => {
		if (answerStorage === null) alert('Select an answer!');
		answerStorage === 'true' ? correctCount++ : wrongCount++;
		qIndex++;
		showQuestion(qIndex);
	});
};
// const submitAnswer = () => {
// 	submitButton.addEventListener('click', () => {
// 		if (selectAnswer !== null) {
// 			selectAnswer === 'true' ? correctCount++ : wrongCount++;
// 			qIndex++;
// 			showQuestion(qIndex);
// 		} else alert('Select an answer!');
// 	});
// };
showQuestion(qIndex);
submitAnswer();
