"use strict";
// Las funciones o arrowfunction que son de tipo void no devuelven valor ellos ejecutan una accion como imprimir sobre ella mismas
(function () {
    function avenger() {
        // return 1; error
        return;
    }
    var villands = function () {
        return;
    };
    var a = avenger();
    console.log(a);
})();
