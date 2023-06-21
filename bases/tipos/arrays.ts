( () => {
    // const numbers: number[] = [1, 2, 3, '4', 5, 6, 7, 8, 9, 10] 
    // const numbers: ( number | string )[] = [1, 2, 3, '4', 5, 6, 7, 8, 9, 10] 
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const villants = ['Duende Verde', 'Thanos', 'Lagarto']

    numbers.push(11);
    // numbers.push(true);
    // numbers.push('12');
    numbers.forEach(n => console.log(n));

    villants.forEach(v => console.log(v.toUpperCase()));
}) ()