/* Aqui usamos Alias ademas de una exportacion por default y eportaciones especificas cuando exportas por default se puede cambiar el nombre de la exportacion o variable al gusto como por ejemplo poderes en el segundo import  */

import * as superHero from "./classes/hero";
import poderes from './data/powers';

const Hero = 123

const ironman = new superHero.Hero('Ironman', 1, 26);
console.log(ironman);

console.log(poderes[0]);






