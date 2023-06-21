// Valores booleanos esto tambien es de manera extricta ya que lo ideal es especificar el tipo de dato y como respuesta de una condicion es almacenar el mismo tipo de dato 

( () =>{

    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    isSuperman = isSuperman  ? true : false;

    /*****  ERROR ******/
    /* Lo quiso almacenar el resultado de tipo string a una variable asignada especificamente como  booleana*/
    //isSuperman = isSuperman  ? 'true' : 'false';

    console.log({isSuperman});
})()