let points = 0;

function postQuestion() {
    const question = document.getElementById('question').value;
    if (question) {
        const questionList = document.getElementById('questions-list');
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${question}</p>
            <button onclick="upvoteQuestion(this)">Upvote</button>
        `;
        questionList.appendChild(questionDiv);
        document.getElementById('question').value = '';
    }
}

function upvoteQuestion(button) {
    const questionDiv = button.parentElement;
    const upvotes = parseInt(questionDiv.getAttribute('data-upvotes')) || 0;
    questionDiv.setAttribute('data-upvotes', upvotes + 1);
    if (upvotes + 1 >= 5) {
        givePoints(10);
        createBadge(questionDiv);
    }
}

function givePoints(amount) {
    points += amount;
    alert(`You earned ${amount} points! Total points: ${points}`);
}

function createBadge(questionDiv) {
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.innerText = 'Top Contributor!';
    questionDiv.appendChild(badge);
}

