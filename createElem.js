( () => {
    'use strict';

     window.createElem = function(tag, val, atr) {
        let elem = document.createElement(tag);
    
        elem.innerHTML = val;
    
        for (let key in atr) {
          elem.setAttribute(key, atr[key])
        }
    
        return elem;
      };
})();