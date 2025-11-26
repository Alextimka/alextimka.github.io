const translations = {
  'en': {
    'aboutTitle': 'About Me'
  },
  'ru': {
    'aboutTitle': 'Обо Мне'
  }
};
document.addEventListener("DOMContentLoaded", () => {
  lang = navigator.language;
  if (!Object.hasOwn(translations, lang)) lang = "en";
  for (const id in translations[lang]) {
    if (Object.hasOwn(translations[lang], id)) document.getElementById(id).innerText = translations[lang][id];    
  }
});

