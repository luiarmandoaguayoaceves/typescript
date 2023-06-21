"use strict";
/* Esta pratica muestra como funcionaria el agregar mas parametros que no son obligatorios a una funcion por el metodo llamado rest el cual permite mandar mas datos no obligatorios que puede tomar y usar a su gusto */
(function () {
    var lastName = function (firstName) {
        var restArg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArg[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArg.join(' '));
    };
    var fullName = lastName('Luis', 'Armando', 'Aguayo');
    console.log(fullName);
})();
