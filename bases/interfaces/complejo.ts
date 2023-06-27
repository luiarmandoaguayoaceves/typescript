/* Se puede realizar implementacion de metodos en una interfaz pero lo recomendable es hacerlo en las clases crear una clase y ahi generarle el metodo */

( () => {



    interface Client {
        name: string;
        age?: number;
        address: Address;
        getfullAddress (id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Luis',
        age: 26,
        address: {
            id: 10345789,
            zip: "123",
            city:'somewhere'
        },
        getfullAddress (id: string) { 
            return this.address.city;
        },
    };

    const Client2: Client = {
        name: '<NAME>',
        //age: undefined,
        address: {
            id: -1,
            zip: "",
            city: ''
        },
        getfullAddress (id: string) { 
            return this.address.city;
        },
    };

})()