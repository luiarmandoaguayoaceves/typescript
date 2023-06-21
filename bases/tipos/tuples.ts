/* Las tuplas te permitesn hacer objetos respetando el orden de los datos por ejemplo en este ejemplo el primer dato tieneque ser numero despues string y al final booleano*/

( () => {
    const heroe: [number, string, boolean] = [25, 'Capitan America', true];
    heroe[0] = 26;
    heroe[1] = 'Ironman';
    heroe[2] = false;

    console.log(heroe);
}) ()