// Las funciones o arrowfunction que son de tipo void no devuelven valor ellos ejecutan una accion como imprimir sobre ella mismas

( () => {
    
    function avenger (): void {
        // return 1; error
        return;
    }

    const villands = ():void => {
        return;
    }

    const a = avenger ();
    console.log(a);
}) ()