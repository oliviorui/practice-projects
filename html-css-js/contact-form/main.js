const form = document.querySelector('form');
const successDiv = document.querySelector('.sent-message');
const inputs = document.querySelectorAll('input[type="text"], input[type="email"]'); // apenas inputs de texto e e-mail
const textarea = document.getElementById('message'); // campo de textarea
const errorMessages = document.querySelectorAll('span');
const queryTypeError = document.getElementById('query-type-error');  // Novo elemento de erro

const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;

    // Validação dos campos de entrada de texto
    inputs.forEach((input, index) => {
        const errorMessage = errorMessages[index];
        if (!input.value) {
            formValid = false;
            input.classList.add('error');
            errorMessage.style.display = 'inline-block';
        } else {
            input.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });

    // Validação do campo textarea
    const messageError = document.getElementById('message-error');
    if (!textarea.value) {
        formValid = false;
        textarea.classList.add('error');
        messageError.style.display = 'inline-block';
    } else {
        textarea.classList.remove('error');
        messageError.style.display = 'none';
    }

    // Validação do campo query-type (botões de rádio)
    const queryTypeSelected = document.querySelector('input[name="query-type"]:checked');
    if (!queryTypeSelected) {
        formValid = false;
        queryTypeError.style.display = 'inline-block';
    } else {
        queryTypeError.style.display = 'none';
    }

    // Validação do consentimento
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consent-error');
    if (!consent.checked) {
        formValid = false;
        consentError.style.display = 'inline-block';
    } else {
        consentError.style.display = 'none';
    }

    // Se o formulário for válido, enviar os dados
    if (formValid) {
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        successDiv.style.display = 'block';
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 3000);
    }
}

form.addEventListener('submit', handleSubmit);
