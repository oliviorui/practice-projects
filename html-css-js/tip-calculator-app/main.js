const form = document.getElementById('form');
const resetBtn = document.getElementById('reset-btn');
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipDivs = document.querySelectorAll('.tip-divs .tip');
const customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.querySelector('.tip-amount span');
const totalAmountDisplay = document.querySelector('.final-total span');

let selectedTip = 0;
let customTip = 0;

const calculateTip = () => {
    const bill = parseFloat(billInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;

    if (people <= 0) {
        document.querySelector('.error-lbl').style.display = 'inline';
        peopleInput.classList.add('error-inp');
        return;
    } else {
        peopleInput.classList.remove('error-inp');
        document.querySelector('.error-lbl').style.display = 'none';
    }

    const tip = customTip || selectedTip;
    const tipAmount = (bill * (tip / 100)) / people;
    const totalAmount = (bill + bill * (tip / 100)) / people;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
};

const handleTipSelection = (e) => {
    selectedTip = parseFloat(e.target.textContent) || 0;
    customTipInput.value = '';
    tipDivs.forEach(tip => tip.classList.remove('selected'));
    e.target.classList.add('selected');
    customTip = 0;
    calculateTip();
};

const handleCustomTip = () => {
    customTip = parseFloat(customTipInput.value) || 0;
    selectedTip = 0;
    tipDivs.forEach(tip => tip.classList.remove('selected'));
    calculateTip();
};

const resetForm = () => {
    billInput.value = '';
    peopleInput.value = '';
    customTipInput.value = '';
    selectedTip = 0;
    customTip = 0;
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    tipDivs.forEach(tip => tip.classList.remove('selected'));
    document.querySelector('.error-lbl').style.display = 'none';
};

tipDivs.forEach(tip => {
    tip.addEventListener('click', handleTipSelection);
});

customTipInput.addEventListener('input', handleCustomTip);
peopleInput.addEventListener('input', calculateTip);
billInput.addEventListener('input', calculateTip);

resetBtn.addEventListener('click', resetForm);
