(function () {
    var toggle = document.getElementById('theme-toggle');
    var savedTheme = localStorage.getItem('simple-theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    function updateToggle() {
        var darkModeEnabled = document.body.classList.contains('dark-mode');
        var lang = document.documentElement.getAttribute('lang') || 'en';
        var dict = window.translations && window.translations[lang];
        toggle.textContent = darkModeEnabled ? '☀' : '☾';
        toggle.setAttribute('aria-label', dict[darkModeEnabled ? 'theme_enable_light' : 'theme_enable_dark']);
        toggle.setAttribute('aria-pressed', String(darkModeEnabled));
    }

    toggle.addEventListener('click', function () {
        var darkModeEnabled = document.body.classList.toggle('dark-mode');
        localStorage.setItem('simple-theme', darkModeEnabled ? 'dark' : 'light');
        updateToggle();
    });

    document.addEventListener('languagechange', updateToggle);
    updateToggle();
})();
