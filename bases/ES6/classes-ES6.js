( () => {


    class avenger {
        // name;
        // power;

        constructor (name, power) {
            this.name = name;
            this.power = power;
        }
    }

    class flyAvenger extends avenger {
        // fly;

        constructor (name, power) {
            super(name, power);
            this.fly = true;
        }
    }

    const hulk = new avenger('Hulk', 9001);
    console.log(hulk);

    const falcon = new flyAvenger('Falcon', 200);
    console.log(falcon);
    


}) ()