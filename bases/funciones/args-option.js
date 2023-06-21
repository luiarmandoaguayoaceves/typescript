"use strict";
/*Similar al ejemplo anterior solo que este son opcionales los argumentos agregando el signo de interrogacion */
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '');
    };
    var nombre = fullName('Tony');
    console.log(nombre);
})();
