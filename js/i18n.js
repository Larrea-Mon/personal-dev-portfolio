// Applies translations from translations.js based on data-i18n / data-i18n-placeholder attributes.
(function () {
     var LANG_KEY = "site-lang";

     function detectDefaultLang() {
          var stored = localStorage.getItem(LANG_KEY);
          if (stored) return stored;
          return (navigator.language || "").toLowerCase().indexOf("es") === 0 ? "es" : "en";
     }

     function applyLang(lang) {
          var dict = (window.translations && window.translations[lang]) || window.translations.en;

          document.querySelectorAll("[data-i18n]").forEach(function (el) {
               var key = el.getAttribute("data-i18n");
               if (dict[key] !== undefined) el.textContent = dict[key];
          });

          document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
               var key = el.getAttribute("data-i18n-html");
               if (dict[key] !== undefined) el.innerHTML = dict[key];
          });

          document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
               var key = el.getAttribute("data-i18n-placeholder");
               if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
          });

          document.querySelectorAll("[data-i18n-value]").forEach(function (el) {
               var key = el.getAttribute("data-i18n-value");
               if (dict[key] !== undefined) el.setAttribute("value", dict[key]);
          });

          document.documentElement.setAttribute("lang", lang);
          localStorage.setItem(LANG_KEY, lang);

          var current = document.getElementById("lang-current");
          if (current) current.textContent = lang.toUpperCase();

          document.querySelectorAll("#lang-dropdown [data-lang]").forEach(function (el) {
               el.classList.toggle("active", el.getAttribute("data-lang") === lang);
               el.parentElement.classList.toggle("active", el.getAttribute("data-lang") === lang);
          });
     }

     document.addEventListener("DOMContentLoaded", function () {
          applyLang(detectDefaultLang());

          document.querySelectorAll("#lang-dropdown [data-lang]").forEach(function (el) {
               el.addEventListener("click", function (e) {
                    e.preventDefault();
                    applyLang(el.getAttribute("data-lang"));
               });
          });
     });
})();
