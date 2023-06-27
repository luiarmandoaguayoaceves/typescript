/* namespace es para poder agrupar clases metodos variables etc y usarlas mdiante la exportacion de esa variable, funcion o clase */

namespace validacion{

    export const validateText = (texto:string) => {
        return (texto.length > 3) ? true :false;
    }

    export const validateNumber = (num: number) => {
        return (num > 2) ? true : false;
    }

}

console.log(validacion.validateNumber(1));
console.log(validacion.validateText('Armando'));
