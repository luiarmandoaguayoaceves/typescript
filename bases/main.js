"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var PowerLevel;
    (function (PowerLevel) {
        PowerLevel[PowerLevel["acuaman"] = 0] = "acuaman";
        PowerLevel[PowerLevel["batman"] = 1] = "batman";
        PowerLevel[PowerLevel["flash"] = 5] = "flash";
        PowerLevel[PowerLevel["superman"] = 100] = "superman";
    })(PowerLevel || (PowerLevel = {}));
    var fuerzaAcuaman = PowerLevel.acuaman;
    var fuerzaBatman = PowerLevel.batman;
    var fuerzaFlash = PowerLevel.flash;
    var fuerzaSuperman = PowerLevel.superman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
var sumar = function (a, b) {
    return a + b;
};
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman(true);
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
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
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '');
    };
    var nombre = fullName('Tony');
    console.log(nombre);
})();
(function () {
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
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (nombre) { return "Hola ".concat(nombre); };
    var saveTheWord = function () { return "Salvando el Mundo por Luis Armando"; };
    var theFunction;
    theFunction = saveTheWord;
    console.log(theFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return 'Batiseñal Activada!';
    };
    console.log(typeof (activateBatiSignal));
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'flash',
        age: 30,
        superPower: ['Speed', 'travel in the time']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        superPower: ['Speed']
    };
})();
(function () {
    var flash = {
        name: 'flash',
        age: 30,
        superPower: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        superPower: [1],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myNewVariable = 'Luis Armando';
    console.log(myNewVariable);
    myNewVariable = 20;
    console.log(myNewVariable);
    myNewVariable = {
        name: 'Bruce',
        age: 40,
        superPower: [15]
    };
    console.log(myNewVariable);
})();
//# sourceMappingURL=main.js.map