/* Los Decoradores no es otra cosa que funciones que se ejecutan al momento traspilar el codigo nada mas y nada menos que eso funciones que se ejecutan automaticamente despues de traspilar */

function printToConsole (constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false): Function => {
    if (print){
        return printToConsole;
    } else {
        return () => {}
    }
}


/* este Decorador ploquea cualquier intento de querer agregar datos en cualquier parte del codigo */
const bloquearPrototipo = function ( constructor: Function) {
    Object.seal( constructor);
    Object.seal( constructor.prototype)
}



/*Creamos esta funcion para validar el dato antes de usar el metodo de la clase  y la agregamos con el @ */
function checkValidIdPokemon() {
    /*Estos tres parametros son obligatorios para usar un decorador en una funcion el target es por el tipo de dato, el propertyKey es el nombre de la funcion y el ultimo es algunos datos como la frase y funcion que deonde se llama */
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log( target, propertyKey, descriptor);
        const originalMethod = descriptor.value;//se agrega esta asignacion en caso de que sea falsa realice la opcion  por defaulkt definida en la funcion original y no el decorador
    
        /*Condicional se asigna la funcion */
        descriptor.value = (id: number ) => {
            if ( id < 1 || id > 800 ){
                return console.error('Egrga dato entre 1 y 800');
            } else {
                return originalMethod(id);
            }
        }
    }
}

function redOnly (isWritable: boolean = true): Function{
    return function (target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Armando'
            },
            set( this, val) {
                console.log(this, val);
                    Object.defineProperty(this, propertyKey, {
                        value: val,
                        writable: !isWritable,
                        enumerable: false
                    })
                }
            }
        return descriptor;
    }

}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    @redOnly(true)//Decorador para una propiedad para evitar ser modificada (privada/estatica/constante como la conozcas o identifiques ) el punto es que no pueda modificarse
    public funcionApi: string = 'http://pokeapi.co'//Esta es una propiedad

    constructor(
        public name: string
    ){}

    @checkValidIdPokemon()//Decoradod para funciones
    sabePokemonDB (id: number) {//Este es un metodo
        console.log(`Pokemon agregado a la DB ${id}` );
    }
}