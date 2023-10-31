document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const loginLink = document.querySelector('.login-link');
    const signupLink = document.querySelector('.signup-link');

    loginLink.addEventListener('click', function() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    signupLink.addEventListener('click', function() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });
});
