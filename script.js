function setLanguage(lang){
  localStorage.setItem('lang',lang);
  applyLanguage();
}

function applyLanguage(){
  var lang=localStorage.getItem('lang')||'en';

  document.querySelectorAll('.en,.pt').forEach(function(el){
    el.classList.remove('active');
  });

  document.querySelectorAll('.'+lang).forEach(function(el){
    el.classList.add('active');
  });

  document.querySelectorAll('[data-l]').forEach(function(btn){
    btn.classList.toggle('active-btn',btn.getAttribute('data-l')===lang);
  });
}

window.addEventListener('DOMContentLoaded',applyLanguage);

function toggleCard(card){
  card.classList.toggle('active');
}
