document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Perform basic validation (you can add more sophisticated validation if needed)
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            // Simulate successful login (replace with your actual login logic)
            setTimeout(() => {
                loginMessage.classList.remove('hidden');
            }, 1000);
        }
    });
});