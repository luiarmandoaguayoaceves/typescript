"use strict";
var validacion;
(function (validacion) {
    validacion.validateText = (texto) => {
        return (texto.length > 3) ? true : false;
    };
    validacion.validateNumber = (num) => {
        return (num > 2) ? true : false;
    };
})(validacion || (validacion = {}));
console.log(validacion.validateNumber(1));
console.log(validacion.validateText('Armando'));
//# sourceMappingURL=main.js.map