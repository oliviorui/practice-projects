const form = document.getElementById('form');
const dismiss_btn = document.getElementById('dismiss');
const sign_up = document.getElementById('sign-up-form');
const success_msg = document.getElementById('success-message');
const user_email = document.getElementById('user-email')

const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const email = data.email;

    // Validação do email
    function validateEmail(value) {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value || !isValidEmail.test(value)) {
            document.getElementById('error-email').classList.toggle('hidden');
            document.getElementById('email').classList.toggle('error-email-input');
            return false;
        } else {
            sign_up.classList.toggle('hidden');
            success_msg.classList.toggle('hidden');
            return true;
        }
    };

    user_email.innerHTML = validateEmail(email) ? email : '"null"';    
}

form.addEventListener('submit', handleSubmit);

dismiss_btn.addEventListener('click', function() {
    sign_up.classList.toggle('hidden');
    success_msg.classList.toggle('hidden');
});
