"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.age = 35;
    const antmant = new Avenger('Ant-mant', 'Capitan', 'Scott Lang');
    console.log(antmant);
    console.log(Avenger.age);
})();
//# sourceMappingURL=main.js.map