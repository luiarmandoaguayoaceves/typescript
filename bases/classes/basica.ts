( () => {


    class Avenger {
        // private name: string;
        // private team: string;
        // public realName?: string;
        static age: number = 35;

        constructor ( 
            private name: string, 
            private team: string, 
            public realName?: string
        ){

        }
    }
    const antmant: Avenger = new Avenger ( 'Ant-mant', 'Capitan', 'Scott Lang');
    console.log(antmant);
    console.log(Avenger.age);
}) ()