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

// ***** Cортируем тех кто онлайн по рангу
        // - сначала фильтруем
        // - потом сортируем

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const onlinAndSorted = players
    .filter(player => player.online)
    .sort((a, b) => a.rank - b.rank);

console.table(onlinAndSorted);
