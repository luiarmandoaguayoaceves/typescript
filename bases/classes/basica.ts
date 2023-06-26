/*Actualmente en ESC6 no hay maneja de transpilar a JS los metodos publicos privados etc por lo cual puede ser que JS tenga muchisimas fallas cuando un dato cambia de tipo y es mas susectible a errores por lo cual TS ayuda a usar la compilacion y ver los errores o las mejoras */

( () => {


    class Avenger {
        // private name: string;
        // private team: string;
        // public realName?: string;
        static age: number = 35;
        static getAvgName  () {
            return `${this.name}`//para poder obtener este dato la propiedad static es para que ese dato solo le pertenecezca a la clase en general por lo cual al mandarlo a llamar se llaa a la classe despues al metodo de tipo static
        }

        constructor ( 
            private name: string, 
            private team: string, 
            public realName?: string
        ){}

        // private bio() {
        public bio() {
            return `I'am ${this.name} and i'am in team ${this.team}`
        }

    }
    // const antmant: Avenger = new Avenger ( 'Ant-mant', 'Capitan', 'Scott Lang');
    // console.log(antmant);
    // console.log(Avenger.age);

    // console.log(antmant.bio());//solo si es publico si fuera privado solo dentro de la clase se puede llamar

    // console.log(Avenger.getAvgName());
}) ()