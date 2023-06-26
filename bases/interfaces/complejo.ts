( () => {



    interface Client {
        name: string;
        age?: number;
        address: Address;
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
    };

    const Client2: Client = {
        name: '<NAME>',
        //age: undefined,
        address: {
            id: -1,
            zip: "",
            city: ''
        },
    };

})()