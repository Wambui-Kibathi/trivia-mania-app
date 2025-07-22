export function renderRegisterForm(onRegister) {
    const form = document.createElement('form');
    form.className = 'register-form neon-card';
    form.innerHTML = `
        <h2 class="game-title">Register to Play</h2>
        <input type="text" name="username" class="neon-input" placeholder="Enter your name" required />
        <button>Register</button>
    `;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = form.username.value.trim();
        if (username) {
            onRegister(username);
        }
    });
    return form;
}