// /* Aqui usamos Alias ademas de una exportacion por default y eportaciones especificas cuando exportas por default se puede cambiar el nombre de la exportacion o variable al gusto como por ejemplo poderes en el segundo import  incluso se pueden importar juntas los pedasos de codigo en la importacion por defecto como en este ejemplo*/


// import {Hero} from "./classes/hero";
// // import poderes, {powers} from './data/powers';

// // const Hero = 123

// const ironman = new Hero('Ironman', 2, 26);
// console.log(ironman);
// console.log(ironman.power);

// // console.log(poderes[0]);


/**********************************************************************************************************************************************************************************************************************************************************************************************************************/

import { genericArrowFunction, genericFunction, printObject } from "../generics/generics";
import { Hero, Villain } from "../interfaces";




// printObject(1);
// printObject('1');
// printObject(true);
// printObject(new Date());
// printObject([1,2,3,4,5,6,7,8,9,10]);
// printObject({a:1, b:'2', c:true});

// console.log(genericFunction(1.12657824).toFixed(2));
// console.log(genericFunction('Hola Armando').toUpperCase());
// console.log(genericFunction(true));
// console.log(genericFunction(new Date()));
// console.log(genericFunction([1,2,3,4,5,6,7,8,9,10]));
// console.log(genericFunction({a:1, b:'2', c:true}));


// console.log(genericArrowFunction(1.12657824).toFixed(2));
// console.log(genericArrowFunction('Hola Armando').toUpperCase());
// console.log(genericArrowFunction(true));
// console.log(genericArrowFunction(new Date()));
// console.log(genericArrowFunction([1,2,3,4,5,6,7,8,9,10]));
// console.log(genericArrowFunction({a:1, b:'2', c:true}));


const deadpool  = {
    name : 'DeadPool',
    realName: 'Wade wilstong Wilson',
    dangerLevel: 130
}

console.log(genericArrowFunction<Villain>(deadpool).name);
console.log(genericArrowFunction<Hero>(deadpool).realName);

