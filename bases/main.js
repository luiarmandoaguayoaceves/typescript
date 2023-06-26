"use strict";
(() => {
    class Xmen {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Mutants extends Xmen {
        salvarMundo() {
            return `Salvando el mundo con ${this.name}`;
        }
    }
    class Villians extends Xmen {
        conquistarMundo() {
            return `${this.realName} está intentando conquistar todo el planeta`;
        }
    }
    const wolverine = new Mutants('Wolverine', 'Logan');
    const magneto = new Villians('Magneto', 'Magnus');
    const printName = (character) => {
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAvgName() {
            return `${this.name}`;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `I'am ${this.name} and i'am in team ${this.team}`;
        }
    }
    Avenger.age = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El valor debe tener mas de 3 caracteres');
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Armando';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el unico Apocalips');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
//# sourceMappingURL=main.js.map