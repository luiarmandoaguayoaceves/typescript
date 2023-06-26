( () => {


    class Apocalipsis {

        static instance: Apocalipsis

        private constructor( public name: string) {}

        static callApocalipsis() :Apocalipsis {
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy el unico Apocalips')
            }

            return Apocalipsis.instance;
        }
         changeName (newName: string) :void {
            this.name = newName
         }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);

    apocalipsis1.changeName('Xavier') 
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);

    // const apolipsis1 = new Apocalipsis ('yo soy el apocalipsis 1')
    // const apolipsis2 = new Apocalipsis ('yo soy el apocalipsis 2')
    // const apolipsis3 = new Apocalipsis ('yo soy el apocalipsis 3')
}) ()