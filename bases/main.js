"use strict";
(() => {
    let flash = {
        name: 'flash',
        age: 30,
        superPower: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        superPower: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `Mutant power ${id}`;
        }
    }
    const wolverine = new Mutant('Wolverine', 'Logan', 26);
    console.log(wolverine);
})();
(() => {
    const client = {
        name: 'Luis',
        age: 26,
        address: {
            id: 10345789,
            zip: "123",
            city: 'somewhere'
        },
        getfullAddress(id) {
            return this.address.city;
        },
    };
    const Client2 = {
        name: '<NAME>',
        address: {
            id: -1,
            zip: "",
            city: ''
        },
        getfullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumber;
    addNumber = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map