( () => {

    type Hero = {
        name: string, 
        age?: number, 
        superPower: number[], 
        getName?: () => string
    }

    let myNewVariable: string | Number | Hero = 'Luis Armando';
    console.log(myNewVariable);

    myNewVariable = 20;
    console.log(myNewVariable);
    
    myNewVariable = {
        name: 'Bruce',
        age: 40,
        superPower: [15]
    }

    console.log(myNewVariable);

})()