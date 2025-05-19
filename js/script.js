const blocks = document.querySelectorAll('.question-answer');

blocks.forEach(block => {
  const button = block.querySelector('.question-wrapper');
  const answer = block.querySelector('.answer-wrapper');
  const questionArrow = block.querySelector('.arrow');
  const answerArrow = block.querySelector('.arrow-2');

  button.addEventListener('click', () => {
    if (answer.classList.contains('close')) {
      answer.classList.remove('close');
      questionArrow.classList.remove('down');
    } else {
      answer.classList.add('close');
      questionArrow.classList.add('down');
    }
  });

  answerArrow.addEventListener('click', () => {
    if (!answer.classList.contains('close')) {
      answer.classList.add('close');
      questionArrow.classList.add('down');
    }
  });
});