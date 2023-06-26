/* La clase abstracta no sirve para crear instancias puede ser una estructura para extender de ahi a otra clases y usen ese formato para las clases que extiendan de ella  */

( () => {

    abstract class Xmen {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Mutants extends Xmen{
        salvarMundo() {
            return `Salvando el mundo con ${this.name}`;
        }
    }
    
    class Villians extends Xmen{
        conquistarMundo() {
            return `${this.realName} está intentando conquistar todo el planeta`;
        }
    }


    const wolverine = new Mutants ('Wolverine', 'Logan');
    const magneto = new Villians ('Magneto', 'Magnus');


    // console.log (wolverine.salvarMundo());
    // console.log (magneto.conquistarMundo());

    const printName =  (character: Xmen) => {
        // console.log(character.realName);
    }

    printName(wolverine)
})()