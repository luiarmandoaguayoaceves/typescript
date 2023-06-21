/*Similar al ejemplo anterior solo que este son opcionales los argumentos agregando el signo de interrogacion */
( () => {

    const fullName = (firstName: string, lastName?: string): string =>{
        return `${firstName} ${lastName || ''}`;
    }

    const nombre: string = fullName('Tony');

    console.log(nombre);
})()

