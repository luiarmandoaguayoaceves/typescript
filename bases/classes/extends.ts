/* Las propierdades
    private : Solamente se puede usar dentro de la clase que se inicializo 
    public : puedes llamarla desde cualquier parte del codigo 
    static : un valor fijo que no se puede cambiar pero puedes usar en cualquier parte del codigo
    protected : puede llamarse si y solo si extiende de la clase padre o se hereda 
*/

( () => {


    class Avenger {
        
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log('Constructor Avenger llamado');  
        }

        // private getFullName(){
        protected getFullName(){
            return `${this.name} ${this.realName}`
        }

        
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
            // console.log('Constructor Xmen llamado');
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName());//Al usar el metodo protected significa que si esta clase extiende de la clase donde se creo ese metodo puede usarlo mientras que private no 
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName (name: string) {
            
            if (name.length < 3){
                throw new Error('El valor debe tener mas de 3 caracteres')
            }
            this.name = name;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)

    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen()
    wolverine.fullName = 'Armando';
    // console.log(wolverine.fullName);
}) ()