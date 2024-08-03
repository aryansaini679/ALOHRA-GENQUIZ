document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "What is the largest source of greenhouse gases?",
            options: [
                "Deforestation",
                "Transportation",
                "Industry",
                "Agriculture"
            ],
            answer: "Transportation"
        },
        {
            question: "Which of the following is a renewable resource?",
            options: [
                "Coal",
                "Natural Gas",
                "Solar Energy",
                "Nuclear Energy"
            ],
            answer: "Solar Energy"
        },
        {
            question: "What percentage of the Earth’s water is fresh water?",
            options: [
                "2.5%",
                "10%",
                "30%",
                "50%"
            ],
            answer: "2.5%"
        }
    ];

    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit');
    const resultsContainer = document.getElementById('results');

    function generateQuiz() {
        quizData.forEach((data, index) => {
            const questionElem = document.createElement('div');
            questionElem.classList.add('question');

            const questionTitle = document.createElement('h3');
            questionTitle.innerText = `Q${index + 1}: ${data.question}`;
            questionElem.appendChild(questionTitle);

            data.options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question${index}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                questionElem.appendChild(label);
            });

            quizContainer.appendChild(questionElem);
        });
    }

    function getResults() {
        let score = 0;
        quizData.forEach((data, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === data.answer) {
                score++;
            }
        });
        return score;
    }

    submitButton.addEventListener('click', () => {
        const score = getResults();
        resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    });

    generateQuiz();
});
