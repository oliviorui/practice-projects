const faqItems = document.querySelectorAll('section');
let lastOpenedAnswer = null;

faqItems.forEach(item => {
    const question = item.querySelector('hgroup');
    const answer = item.querySelector('p');
    const plusIcon = item.querySelector('.plus-icon');
    const minusIcon = item.querySelector('.minus-icon');

    answer.classList.add('hidden');
    minusIcon.classList.add('hidden');

    question.addEventListener('click', () => {
        const isAnswerVisible = !answer.classList.contains('hidden');

        if (isAnswerVisible) {
            answer.classList.add('hidden');
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
            lastOpenedAnswer = null;
        } else {
            if (lastOpenedAnswer && lastOpenedAnswer !== answer) {
                lastOpenedAnswer.classList.add('hidden');
                lastOpenedAnswer.previousElementSibling.querySelector('.plus-icon').style.display = 'block';
                lastOpenedAnswer.previousElementSibling.querySelector('.minus-icon').style.display = 'none';
            }

            answer.classList.remove('hidden');
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';

            lastOpenedAnswer = answer;
        }
    });
});
