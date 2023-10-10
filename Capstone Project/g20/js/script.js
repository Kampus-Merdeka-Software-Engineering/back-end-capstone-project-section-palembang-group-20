
    let passwordInput = document.getElementById('password');
    let eyeClosed = document.getElementById('eyeClosed');
    let eyeOpen = document.getElementById('eyeOpen');

    eyeClosed.addEventListener('click', () => {
        passwordInput.type = 'text';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    });

    eyeOpen.addEventListener('click', () => {
        passwordInput.type = 'password';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    });