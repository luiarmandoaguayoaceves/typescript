"use strict";
(function () {
    // const numbers: number[] = [1, 2, 3, '4', 5, 6, 7, 8, 9, 10] 
    // const numbers: ( number | string )[] = [1, 2, 3, '4', 5, 6, 7, 8, 9, 10] 
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villants = ['Duende Verde', 'Thanos', 'Lagarto'];
    numbers.push(11);
    // numbers.push(true);
    // numbers.push('12');
    numbers.forEach(function (n) { return console.log(n); });
    villants.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
