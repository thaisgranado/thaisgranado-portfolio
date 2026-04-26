function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage();
}

function applyLanguage() {
  const lang = localStorage.getItem("lang") || "en";

  document.body.classList.remove("lang-en", "lang-pt");
  document.body.classList.add("lang-" + lang);

  document.querySelectorAll("[data-l]").forEach(function(button) {
    button.classList.toggle("active", button.getAttribute("data-l") === lang);
  });
}

window.addEventListener("DOMContentLoaded", applyLanguage);
