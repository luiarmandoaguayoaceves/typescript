(() => {
    let avengers: number = 10;

    console.log(avengers);

    const villans: number = 20;

    if(avengers < villans){
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }

    avengers = Number( '123' );

    console.log({avengers});
})()