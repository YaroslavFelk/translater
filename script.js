( () => {
  'use strict';

  // получаем необходимые нам элементы. 
  const outputTextEl = document.querySelector('.js-output-text'),
        inputTextEl = document.querySelector('.js-input-text'),
        formEl = document.querySelector('.js-form'),
        inputLanguageEl = document.querySelector('.js-input-language'),
        outputLanguageEl = document.querySelector('.js-output-language');

  fetch( getUrl('get') )
    // получение и перевод в формат JSON.
    .then ( (response) => response.json())
    .then ( (response) => {
      let fragment = document.createDocumentFragment();

      for (let key in response.langs) {
        // создаем елемент option
        let option = createElem('option', response.langs[key], {'value': key});
        
        fragment.appendChild(option);
      }

      inputLanguageEl.appendChild(fragment.cloneNode(true));
      outputLanguageEl.appendChild(fragment);

      // устанавливаем изначальные языки
      inputLanguageEl.value = 'ru';
      outputLanguageEl.value = 'en';

      // обработчик формы
      formEl.addEventListener('submit',  (ev) => {
         // сбрасываем стандартное поведение. 
          ev.preventDefault();

          // вызываем URL 
          fetch( getUrl('translate', inputTextEl.value, inputLanguageEl.value, outputLanguageEl.value) )
            //получение и перевод в формат JSON.
            .then ( (response) => response.json())
            // возвращаем ответ. 
            .then ((response) => (outputTextEl.innerHTML = response.text))
      });  
    });
})();