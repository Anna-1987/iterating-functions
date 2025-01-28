// цепочка вызовов - chaining

const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(num => num > 2); // отобрали больше 2
console.log('greaterThenTwo', greaterThenTwo);

const multByThree = greaterThenTwo.map(num => num * 3); // утроили єлементі получившегося массива

console.log('multByThree', multByThree);

const storted = multByThree.sort((a, b) => a - b);// отсортировали в порядке возростания
console.log('storted', storted);


// Цепочка предыдущих трех методов

const sort = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);

console.log('sort', sort);