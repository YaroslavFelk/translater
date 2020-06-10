( () => {
    'use strict';

    // создание URL  Api. 
    window.getUrl = function(getOrTranslate, text,  fromLang, toLang) {
        // Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
        const API_KEY = 'trnsl.1.1.20200220T185155Z.857ae4fc537b7bb3.34b1246ba9ee79e0ae2226b7e42a1ba08f436327';
    
        // Яндекс APi translate.
        let url = 'https://translate.yandex.net/api/v1.5/tr.json/';
    
        //сылка,  если нам нужно получить список языков
        if (getOrTranslate === 'get') {
          url += 'getLangs?ui=ru&';
          url += 'key=' + API_KEY;
        } 

        //ссылка,  если нужен перевод текста. 
        if (getOrTranslate === 'translate') {
          url += 'translate';
          url += '?key=' + API_KEY;
          url += '&text=' + text;
          url += '&lang=' +  
          fromLang +  
            '-' + 
            toLang;
        }
        return url;
    };
})();