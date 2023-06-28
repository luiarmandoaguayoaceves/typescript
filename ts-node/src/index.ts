/* Aqui usamos Alias ademas de una exportacion por default y eportaciones especificas cuando exportas por default se puede cambiar el nombre de la exportacion o variable al gusto como por ejemplo poderes en el segundo import  incluso se pueden importar juntas los pedasos de codigo en la importacion por defecto como en este ejemplo*/

import {Hero} from "./classes/hero";
// import poderes, {powers} from './data/powers';

// const Hero = 123

const ironman = new Hero('Ironman', 2, 26);
console.log(ironman);
console.log(ironman.power);

// console.log(poderes[0]);






