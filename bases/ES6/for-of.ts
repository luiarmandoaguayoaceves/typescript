( () => {


    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjonir'
    }

    const avengers: Avenger[] = [ironman, captainAmerica, thor]
    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.name, avenger.weapon);
        
    }

}) ()