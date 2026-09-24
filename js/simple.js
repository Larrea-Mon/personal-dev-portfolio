(function () {
    var toggle = document.getElementById('theme-toggle');
    var savedTheme = localStorage.getItem('simple-theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    function updateToggle() {
        var darkModeEnabled = document.body.classList.contains('dark-mode');
        toggle.textContent = darkModeEnabled ? '☀' : '☾';
        toggle.setAttribute('aria-label', darkModeEnabled ? 'Activar modo claro' : 'Activar modo oscuro');
        toggle.setAttribute('aria-pressed', String(darkModeEnabled));
    }

    toggle.addEventListener('click', function () {
        var darkModeEnabled = document.body.classList.toggle('dark-mode');
        localStorage.setItem('simple-theme', darkModeEnabled ? 'dark' : 'light');
        updateToggle();
    });

    updateToggle();
})();
