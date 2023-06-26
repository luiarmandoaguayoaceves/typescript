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
    const client = {
        name: 'Luis',
        age: 26,
        address: {
            id: 10345789,
            zip: "123",
            city: 'somewhere'
        },
    };
    const Client2 = {
        name: '<NAME>',
        address: {
            id: -1,
            zip: "",
            city: ''
        },
    };
})();
//# sourceMappingURL=main.js.map