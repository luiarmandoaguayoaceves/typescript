/* Se recomienda usar Interfaces si no sabes si se pueden agregar mas variables metodos etc y el type cuando estas seguro que no va a crecer   */

( () => {


    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        

        constructor (
            public name: string,
            public realName: string,
            public age: number
        ){

        }

        mutantPower(id: number): string {
            return `Mutant power ${ id }`
        }
    }

    const wolverine = new Mutant ('Wolverine', 'Logan', 26)
    console.log(wolverine);
}) ()