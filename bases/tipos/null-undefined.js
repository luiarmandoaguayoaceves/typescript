"use strict";
/*Al asignarles valores como null o undefined no se pes puede poner el tipo de dato como algo que no sea eso mismo null o undefinde ya que lo estamos realizando de manera restringida para evitar errores y problemas a futuro a comparacion de JS ademas de que cabe aclarar que undefinde y null no es lo mismo */
(function () {
    var nada = undefined;
    // const nada1:number = undefined;
    var nada2 = null;
    // const nada3:string = null;
    console.log(nada);
    console.log(nada2);
    if (nada !== nada2) {
        console.log("".concat(nada, " y ").concat(nada2, " Es diferente? = ").concat((nada !== nada2)));
    }
})();
