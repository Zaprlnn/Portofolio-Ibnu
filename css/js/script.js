document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Cek memori browser untuk tema yang disimpan
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerText = '☀️'; // Ikon matahari untuk mode siang
    }

    // 2. Logika ganti tema saat diklik
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeToggle.innerText = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerText = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
});