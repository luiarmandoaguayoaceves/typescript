"use strict";
/*Los arreglos en los objetos en typescript si quieres modificar los datos tienes que cambiar todos los datos como buenas practicas no como en javascript que puedes agregar si el campo no existe se debe usar un metodo para agregar un nuevo campo */
(function () {
    //?Usa el sigo de interrogacion para hacer opcional el parametro age?: por ejemplo
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
    // superHeroe = {
    //     name: 'Superman',
    //     //age: 40,
    //     superPower: ['Fly', 'Speed'],
    //     getName(){
    //          return this.name;
    //     }
    // }
    // console.log( superHeroe.getName() )
})();
