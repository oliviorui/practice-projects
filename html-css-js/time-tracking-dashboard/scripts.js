async function getData() {
    const response = await fetch('./data.json');

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

function populateDOM(param) {
    let msg = '';
    switch (param) {
        case 'daily':
            msg = 'Day';
            break;
        case 'weekly':
            msg = 'Week';
            break;
        case 'monthly':
            msg = 'Month';
    }

    const promise = getData();

    promise
    .then((data) => {
        for (const dt of data) {
            const div = document.querySelector('.'+dt.title.toLowerCase().replace(' ', '-'));

            if (div) {
                const timeframe = dt.timeframes[param];

                if (timeframe) {
                    div.querySelector('h3').textContent = `${timeframe.current}hrs`;
                    div.querySelector('p').textContent = `Last ${msg} - ${timeframe.previous}hrs`;
                }
            }
        }
    })
    .catch((error) => {
        console.error(`Could not found data: ${error}`);
    });
}

const daily_link = document.getElementById('daily-link');
const weekly_link = document.getElementById('weekly-link');
const monthly_link = document.getElementById('monthly-link');

daily_link.addEventListener('click', function() {
    daily_link.classList.add('active');
    weekly_link.classList.remove('active');
    monthly_link.classList.remove('active');
    populateDOM('daily');
});
weekly_link.addEventListener('click', function() {
    daily_link.classList.remove('active');
    weekly_link.classList.add('active');
    monthly_link.classList.remove('active');
    populateDOM('weekly');
});
monthly_link.addEventListener('click', function() {
    daily_link.classList.remove('active');
    weekly_link.classList.remove('active');
    monthly_link.classList.add('active');
    populateDOM('monthly');
});
