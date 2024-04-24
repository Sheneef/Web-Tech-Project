// Anime Trivia Games Youtube channel Coding with Nick
const quizinfo = [
    {
        question: "What is the name of the Titan that ate Eren's Mother?",
        photo: "img/Gamephoto/Eren Mom.jpg",
        a: "Smiling Titan",
        b: "Founding Titan",
        c: "Armored Titan",
        d: "Beast Titan",
        correct: "a",
    },
    {
        question: "What is the name of the first wall that was breached?",
        photo: "img/Gamephoto/fisr wall.jpeg",
        a: "Wall Rose",
        b: "Wall Sina",
        c: "Wall Maria",
        d: "Wall Katherin",
        correct: "c",
    },
    {
        question: "What material are the Walls made of?",
        photo: "img/Gamephoto/Walls.jpg",
        a: "Steel",
        b: "Brick",
        c: "Wood",
        d: "Titan hardening",
        correct: "d",
    },
    {
        question: "What is the name of the city protected by the Walls?",
        photo: "img/Gamephoto/paradis.jpg",
        a: "Marley",
        b: "Paradis",
        c: "Trost",
        d: "Shiganshina",
        correct: "b",
    },
    {
        question: "How did Petra Ral die?",
        photo: "img/Gamephoto/petra.jpg",
        a: "Killed by a Titan during the Battle of Trost",
        b: "Executed for insubordination",
        c: "Crushed by debris during a Titan attack",
        d: "Slammed into a tree by the Female Titan and crushed",
        correct: "d",
    },
    {
        question: "Which commanding officer devised the plan to take back Trost?",
        photo: "img/Gamephoto/Trost district.jpg",
        a: "Erwin Smith",
        b: "Dot Pixis",
        c: "Keith Shadis",
        d: "Hange Zoe",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerQuiz = document.querySelectorAll('.answer');
const quizQuest = document.getElementById('questions');
const quizPhoto = document.getElementById('quiz-photo');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('Submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizinfo[currentQuiz];
    quizQuest.innerText = currentQuizData.question;
    quizPhoto.src = currentQuizData.photo;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerQuiz.forEach(answer => answer.checked = false);
}

function getSelected() {
    let answer = undefined;
    answerQuiz.forEach(answerOption => {
        if (answerOption.checked) {
            answer = answerOption.id;
        }
    });
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizinfo[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizinfo.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizinfo.length} questions correctly</h2>
                <button class="quiz-button" onclick="location.reload()">Reload</button>
            `;
        }
    }
});

