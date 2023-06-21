/*El Error de tipo never ese es para detener el programa completamente al entrar en esa funcion o en ese valor de never el programa colapsa puedes poner un condicional para evitar que se detenga pero lo recomendable es usarlo para detener el programa y evitar el mal uso o funcionamiento. */

( () => {

    const error = (mensaje: string):never => {
        
        throw new Error(mensaje);
    }

    error('Auxilio tengo un error')
}) ()