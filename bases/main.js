"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.6519843
    };
    const avengerArr = ['cap. America', 'Ironman', 'Hulk'];
    const avengerArr2 = ['cap. America', true, 2145.21554];
    const [, hombreDeAcero,] = avengerArr;
    const [capitan, activo, poder] = avengerArr2;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjonir'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const a = 'Hola Armando desde la constante a';
    const saludar = () => {
        console.log(`hola Armando desde la funcion asignada a una constante saludar`);
    };
})();
//# sourceMappingURL=main.js.map