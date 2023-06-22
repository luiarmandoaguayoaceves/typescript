( () => {

    type Avengers= {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.6519843
    };

    // const {poder, vision} = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase());

    // const {ironman, ...resto}:Avengers = avengers;
    // console.log(ironman.toUpperCase(), resto);

    const avengerArr: string[] = ['cap. America', 'Ironman', 'Hulk'];
    const avengerArr2: [string, boolean, number] = ['cap. America', true, 2145.21554];
    const [, hombreDeAcero,] = avengerArr;
    const [capitan, activo, poder ] = avengerArr2;

    // console.log({hombreDeAcero});
    // console.log({capitan, activo, poder});
}) ()