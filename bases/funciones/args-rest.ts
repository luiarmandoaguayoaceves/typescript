/* Esta pratica muestra como funcionaria el agregar mas parametros que no son obligatorios a una funcion por el metodo llamado rest el cual permite mandar mas datos no obligatorios que puede tomar y usar a su gusto */
(()=>{
    const lastName = ( firstName: string, ...restArg: string[]): string =>{
        return `${firstName} ${restArg.join(' ')}`
    }

    const fullName = lastName('Luis', 'Armando', 'Aguayo');
    console.log(fullName);
})()