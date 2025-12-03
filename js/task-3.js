function filterArray(numbers, value) {
    let mass = [];
    let num = numbers.length;
    for (let u = 0; u < num; u++) {
        if (numbers[u] > value) {
            mass.push(numbers[u]);
        }
    }
    return mass;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

