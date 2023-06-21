import { type } from "os"

( ()=> {

    type Hero = {
        name: string, 
        age?: number, 
        superPower: number[], 
        getName?: () => string
    }

    let flash: Hero = {
    name: 'flash',
        age: 30,
        superPower: [1, 2]
    }
    
    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        superPower: [1  ],
        getName(){
            return this.name;
        }
    }
})()