"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123');
    console.log({ avengers: avengers });
})();
