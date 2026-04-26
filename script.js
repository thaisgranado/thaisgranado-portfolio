function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyLanguage();
}

function applyLanguage() {
  const lang = localStorage.getItem('lang') || 'en';

  document.querySelectorAll('.en, .pt').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.' + lang).forEach(el => {
    el.classList.add('active');
  });
}

window.onload = applyLanguage;
