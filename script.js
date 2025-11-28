const questions = [
    // -----------------------------------------------------
    // 10 PROBLEMAS DE ADIÇÃO
    // -----------------------------------------------------

  {
    "question": "João bebeu 2L de água de manhã e 1L à tarde. Quantos litros ele bebeu no total?",
    "answers": [
      { "text": "2L", "correct": false },
      { "text": "3L", "correct": true },
      { "text": "4L", "correct": false },
      { "text": "1L", "correct": false }
    ],
    "calculation": "2L + 1L = 3L.",
    "level": "easy"
  },
  {
    "question": "Maria colocou 500mL de suco em um copo e depois mais 300mL. Qual é o total?",
    "answers": [
      { "text": "700mL", "correct": false },
      { "text": "800mL", "correct": true },
      { "text": "900mL", "correct": false },
      { "text": "600mL", "correct": false }
    ],
    "calculation": "500mL + 300mL = 800mL.",
    "level": "easy"
  },
  {
    "question": "Um balde tinha 1L de água e foi acrescentado mais 2L. Qual é o total?",
    "answers": [
      { "text": "2L", "correct": false },
      { "text": "3L", "correct": true },
      { "text": "4L", "correct": false },
      { "text": "1L", "correct": false }
    ],
    "calculation": "1L + 2L = 3L.",
    "level": "easy"
  },
  {
    "question": "Pedro colocou 200mL de leite em uma xícara e depois mais 400mL. Qual é o total?",
    "answers": [
      { "text": "500mL", "correct": false },
      { "text": "600mL", "correct": true },
      { "text": "700mL", "correct": false },
      { "text": "300mL", "correct": false }
    ],
    "calculation": "200mL + 400mL = 600mL.",
    "level": "easy"
  },
  {
    "question": "Um aquário tinha 3L de água e foi colocado mais 2L. Qual é o total?",
    "answers": [
      { "text": "4L", "correct": false },
      { "text": "5L", "correct": true },
      { "text": "6L", "correct": false },
      { "text": "3L", "correct": false }
    ],
    "calculation": "3L + 2L = 5L.",
    "level": "easy"
  },
  {
    "question": "Ana encheu uma garrafa com 1L e depois colocou mais 500mL. Qual é o total?",
    "answers": [
      { "text": "1,5L", "correct": true },
      { "text": "2L", "correct": false },
      { "text": "500mL", "correct": false },
      { "text": "1L", "correct": false }
    ],
    "calculation": "1L = 1000mL. 1000mL + 500mL = 1500mL = 1,5L.",
    "level": "hard"
  },
  {
    "question": "Um suco tinha 700mL e foi misturado com mais 200mL. Qual é o total?",
    "answers": [
      { "text": "800mL", "correct": false },
      { "text": "900mL", "correct": true },
      { "text": "1000mL", "correct": false },
      { "text": "700mL", "correct": false }
    ],
    "calculation": "700mL + 200mL = 900mL.",
    "level": "hard"
  },
  {
    "question": "Um copo tinha 250mL de suco e foi acrescentado mais 250mL. Qual é o total?",
    "answers": [
      { "text": "400mL", "correct": false },
      { "text": "500mL", "correct": true },
      { "text": "600mL", "correct": false },
      { "text": "250mL", "correct": false }
    ],
    "calculation": "250mL + 250mL = 500mL.",
    "level": "hard"
  },
  {
    "question": "Um jarro tinha 1L e foi colocado mais 1L. Qual é o total?",
    "answers": [
      { "text": "1L", "correct": false },
      { "text": "2L", "correct": true },
      { "text": "3L", "correct": false },
      { "text": "4L", "correct": false }
    ],
    "calculation": "1L + 1L = 2L.",
    "level": "hard"
  },
  {
    "question": "Um copo tinha 300mL e foi acrescentado mais 400mL. Qual é o total?",
    "answers": [
      { "text": "600mL", "correct": false },
      { "text": "700mL", "correct": true },
      { "text": "800mL", "correct": false },
      { "text": "500mL", "correct": false }
    ],
    "calculation": "300mL + 400mL = 700mL.",
    "level": "hard"
  },


        // -----------------------------------------------------
        // 10 PROBLEMAS DE SUBTRAÇÃO
        // -----------------------------------------------------
        {
    "question": "Um balde tinha 3L de água e João tirou 1L. Quanto sobrou?",
    "answers": [
      { "text": "1L", "correct": false },
      { "text": "2L", "correct": true },
      { "text": "3L", "correct": false },
      { "text": "0L", "correct": false }
    ],
    "calculation": "3L - 1L = 2L.",
    "level": "easy"
  },
  {
    "question": "Uma garrafa tinha 500mL de suco e Maria bebeu 200mL. Quanto restou?",
    "answers": [
      { "text": "200mL", "correct": false },
      { "text": "300mL", "correct": true },
      { "text": "400mL", "correct": false },
      { "text": "100mL", "correct": false }
    ],
    "calculation": "500mL - 200mL = 300mL.",
    "level": "easy"
  },
  {
    "question": "Um aquário tinha 2L de água e foram retirados 1L. Quanto ficou?",
    "answers": [
      { "text": "1L", "correct": true },
      { "text": "2L", "correct": false },
      { "text": "3L", "correct": false },
      { "text": "0L", "correct": false }
    ],
    "calculation": "2L - 1L = 1L.",
    "level": "easy"
  },
  {
    "question": "Um copo tinha 400mL de leite e Pedro bebeu 100mL. Quanto sobrou?",
    "answers": [
      { "text": "200mL", "correct": false },
      { "text": "300mL", "correct": true },
      { "text": "400mL", "correct": false },
      { "text": "100mL", "correct": false }
    ],
    "calculation": "400mL - 100mL = 300mL.",
    "level": "easy"
  },
  {
    "question": "Uma garrafa tinha 800mL de suco e foram servidos 300mL. Quanto restou?",
    "answers": [
      { "text": "400mL", "correct": false },
      { "text": "500mL", "correct": true },
      { "text": "600mL", "correct": false },
      { "text": "300mL", "correct": false }
    ],
    "calculation": "800mL - 300mL = 500mL.",
    "level": "easy"
  },
  {
    "question": "Uma jarra tinha 1L de suco e foram servidos 500mL. Quanto restou?",
    "answers": [
      { "text": "400mL", "correct": false },
      { "text": "500mL", "correct": true },
      { "text": "600mL", "correct": false },
      { "text": "700mL", "correct": false }
    ],
    "calculation": "1L = 1000mL. 1000mL - 500mL = 500mL.",
    "level": "hard"
  },
  {
    "question": "Um balde tinha 2L de água e foram retirados 500mL. Quanto sobrou?",
    "answers": [
      { "text": "1,5L", "correct": true },
      { "text": "2L", "correct": false },
      { "text": "500mL", "correct": false },
      { "text": "1L", "correct": false }
    ],
    "calculation": "2L = 2000mL. 2000mL - 500mL = 1500mL = 1,5L.",
    "level": "hard"
  },
  {
    "question": "Um copo tinha 600mL de água e João bebeu 200mL. Quanto sobrou?",
    "answers": [
      { "text": "300mL", "correct": false },
      { "text": "400mL", "correct": true },
      { "text": "500mL", "correct": false },
      { "text": "200mL", "correct": false }
    ],
    "calculation": "600mL - 200mL = 400mL.",
    "level": "hard"
  },
  {
    "question": "Um jarro tinha 2L de suco e foram servidos 1L. Quanto restou?",
    "answers": [
      { "text": "0,5L", "correct": false },
      { "text": "1L", "correct": true },
      { "text": "2L", "correct": false },
      { "text": "1,5L", "correct": false }
    ],
    "calculation": "2L - 1L = 1L.",
    "level": "hard"
  },
  {
    "question": "Um balde tinha 1500mL de água e foram retirados 500mL. Quanto sobrou?",
    "answers": [
      { "text": "500mL", "correct": false },
      { "text": "1000mL", "correct": true },
      { "text": "1500mL", "correct": false },
      { "text": "2000mL", "correct": false }
    ],
    "calculation": "1500mL - 500mL = 1000mL.",
    "level": "hard"
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');
const acertoSom = document.getElementById('acerto-som');
const erroSom = document.getElementById('erro-som');

// Referências corrigidas para os elementos do placar
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const counterTextElement = document.getElementById('counter-text');

const explanationBox = document.getElementById('explanation-box');
const calculationText = document.getElementById('calculation');

const difficultySelector = document.getElementById('difficulty');
const startButton = document.getElementById('start-btn');
const quizBox = document.getElementById('quiz-box');
let availableQuestions = []; // O array de questões filtradas que será usado no quiz.

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;



// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ATENÇÃO: Esta função será chamada apenas DEPOIS que a função filterQuestions() for executada.
function startQuiz() {
    // 1. Embaralha o array de questões filtrado (Fácil, Difícil ou Todas)
    shuffleArray(availableQuestions); 
    
    // 2. Zera as variáveis de controle do quiz
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    // 3. Atualiza o placar e o contador
    updateScoreAndCounter(); 
    
    // 4. Garante que o botão "Próxima Pergunta" esteja escondido no início
    nextButton.classList.add('hide'); 
    
    // 5. Mostra a primeira questão do array filtrado
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = availableQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    updateScoreAndCounter();

    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackElement.innerText = '';
    explanationBox.classList.add('hide'); 
    calculationText.innerText = ''; 
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    // ESSENCIAL: Declarar a variável da pergunta atual aqui
    const currentQuestion = availableQuestions[currentQuestionIndex];
    
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        selectedButton.classList.add('correct');
        feedbackElement.innerText = 'Correto! 🎉';
        correctAnswers++;
        acertoSom.play();
    } else {
        selectedButton.classList.add('wrong');
        feedbackElement.innerText = 'Ops! Tente novamente. 🤔';
        wrongAnswers++;
        erroSom.play();
    }

    // NOVO: Exibe o cálculo correto
    calculationText.innerText = currentQuestion.calculation;
    explanationBox.classList.remove('hide'); // Torna a explicação visível

    updateScoreAndCounter();

    // BLOCO ÚNICO para desabilitar todos os botões e mostrar a resposta correta
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    // CRUCIAL: Mostrar o botão de próxima pergunta
    nextButton.classList.remove('hide');
}

// A função para atualizar o placar é a mais importante aqui.
function updateScoreAndCounter() {
    correctCountElement.innerText = `Acertos: ${correctAnswers}`;
    wrongCountElement.innerText = `Erros: ${wrongAnswers}`;
    counterTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${availableQuestions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < availableQuestions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz finalizado! Você acertou <span style="color:#28a745;">${correctAnswers}</span> de ${availableQuestions.length} perguntas. Parabéns!`;
        resetState();
        nextButton.classList.add('hide');
    }
});

function filterQuestions() {
    const selectedLevel = difficultySelector.value;
    
    if (selectedLevel === 'all') {
        // Se 'Todas' foi selecionado, usa o array completo
        availableQuestions = [...questions]; 
    } else {
        // Filtra o array original com base no nível
        availableQuestions = questions.filter(q => q.level === selectedLevel);
    }
}

// Evento para o novo botão Começar Quiz
startButton.addEventListener('click', () => {
    filterQuestions();
    // Esconde o seletor de dificuldade e mostra o quiz
    document.getElementById('difficulty-selector').classList.add('hide-initial');
    quizBox.classList.remove('hide-initial');
    nextButton.classList.remove('hide-initial');

    startQuiz(); // Chama a função que inicia o quiz com o array filtrado
});