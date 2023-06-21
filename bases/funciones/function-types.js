"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (nombre) { return "Hola ".concat(nombre); };
    var saveTheWord = function () { return "Salvando el Mundo por Luis Armando"; };
    //!esta es de tipo Any la cual puede aplicar a cualquier tipo de respuesta que no es lo mas recomendable ya que se presta a generar muchos errores
    //! let theFunction; 
    //Este es para los que reciven funcion pero aun que es un poco mejor se recomienda se muy especifico con lo que re recive como respuesta
    // let theFunction: Function;
    //*theFunction = 10;
    //*console.log(theFunction);
    // let theFunction: (x: number, y: number) => number;
    // theFunction = addNumbers;
    // console.log(theFunction(5, 10));     
    //? let theFunction: (x: string) => string;
    //? theFunction = greet;
    //? console.log(theFunction('Armando'));
    var theFunction;
    theFunction = saveTheWord;
    console.log(theFunction());
})();
