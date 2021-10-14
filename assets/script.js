const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = documentElementbyId('submit');

function buildQuiz(){
    //Store HTML output
    const output= [];
    // Each question
    myQuestions.forEach(
       (currentQuestion, questionNumber) => {
           const answers = [];

           for(letter in currentQuestion.answer){
        answer.push(
            `<label>
                <input type="radio" name="questions${questionNumber}" value="${letter}"></input>
                    ${letter} : 
                    ${currentQuestion.answers[letter]}
            </label>`
        );
    }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers"> ${answers.join('')}</div>`
        );
    } 
);

quizContainer.innerHTML = output.join('');

myQuestions.forEach ( ( currentQuestion,questionNumber) => {

});

function showResults(){}

// Quiz Questions go here
const myQuestions = [
    {
        question: "Who is the lead singer of Rise Against",
        answer: {
            a: "Tim Mcilrath",
            b: "Dave Grohl",
            c: "Jon Snodgrass"
        },
        correctAnswer: "a"
    },
        question: "Where was Rise Against formed?",
        answer: {
            a: "Chicago",
            b: "Dallas",
            c: "San Diego"
        },
        correctAnswer: "a"
    },
    {
        question: "What organization does Rise Against Support?",
        answer: {
            a: "PETA",
            b: "WWF",
            c: "NASA"
        },
        correctAnswer: "a"
    },
    {
        question: "How many years has Rise Against been together?",
        answers: {
            a: "22",
            b: "36",
            c: "28"
        },
        correctAnswer: 'a'
    },
];



//display quiz right away
buildQuiz();

//when submitting, show score
submutButton.addEventListener('clcik', showResults);