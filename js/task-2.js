function makeArray(firstArray, secondArray, maxLength) {
  let mass = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (mass.length === maxLength) {
            return mass;
        }
      mass.push(firstArray[i]);
    }
    for (let i = 0; i < secondArray.length; i++) {
        if (mass.length === maxLength) {
            return mass;
        }
        mass.push(secondArray[i]);
    }
    return mass.slice(0, maxLength);
}





console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


