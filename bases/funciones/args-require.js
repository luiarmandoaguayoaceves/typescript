"use strict";
(function () {
    /*en este ejemplo se muestran los arfumentos obligatorios que se requieren y son muy importantes para no tener errores al momento de realizar funciones y que se remplacen los datos por otros y salgan errores */
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '');
        }
    };
    var nombre = fullName('Tony', 'Stark', true);
    console.log(nombre);
})();
