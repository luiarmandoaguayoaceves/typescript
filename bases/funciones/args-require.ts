( () => {

    /*en este ejemplo se muestran los arfumentos obligatorios que se requieren y son muy importantes para no tener errores al momento de realizar funciones y que se remplacen los datos por otros y salgan errores */
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string =>{
        if(upper){
            return `${firstName} ${lastName || ''}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || ''}`;
        }
    }

    const nombre: string = fullName('Tony', 'Stark', true);

    console.log(nombre);
})()

