var handleMatchMedia = function(mediaQuery) {
    if (mediaQuery.matches) {
        // если менее 480px или равное, то выполняется код между скобок 
    } else {
        // обратное условие, т.е если более 480px
    }
},
mql = window.matchMedia('all and (max-width: 480px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia); 
//запускается каждый раз, когда заданное разрешение медиа запроса достигнуто