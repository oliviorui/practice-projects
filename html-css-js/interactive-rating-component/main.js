const ratingSection = document.querySelectorAll('.rate-select .rate');
const btn = document.querySelector('button');
const rateCard = document.querySelector(".rating-state-card");
const tnkCard = document.querySelector(".thank-you-state-card");
const finalRate = document.getElementById('result-spn');

finalRate.textContent = 1;

tnkCard.classList.add('hidden');

const handleRateSelection = (e) => {
    selectedRate = e.target.textContent || 1;
    ratingSection.forEach(rate => rate.classList.remove('selected'));
    e.target.classList.add('selected');
    finalRate.textContent = selectedRate;
};

ratingSection.forEach(rate => {
    rate.addEventListener('click', handleRateSelection);
});

btn.addEventListener('click', () => {
    rateCard.classList.add('hidden');
    tnkCard.classList.remove('hidden');
});
