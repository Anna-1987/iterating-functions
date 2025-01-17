// Array.prototype.filter()
//     - Поэлементно перебиоает масси
//     - Возвращает новый массив(с элементами или пустой)
//     - Добавляет в возвращаемый массив элементы которые удовлетворяют условию
// колбек - функции
//     - если колбек вернул true элемент добавляется в возврвщаемый массив
//     - если колбек вернул false элемент НЕ добавляется в возвращаемый массив


//  const numbers = [5, 10, 15, 20, 25];

// const FilterNums = numbers.filter(number => number > 10
//     // console.log(number > 10);

// );
// console.log('numbers', numbers);
// console.log('FilterNums', FilterNums);

// *****************************************************************

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
]

// *** ------------- Отфильтровать играков которые online ---------***

const onlinePlayer = players.filter(player => player.online);
console.table(onlinePlayer);

//  *** ------------- Отфильтровать играков которые offline ---------***

const offlinePlayer = players.filter(player => !player.online);
console.table(offlinePlayer);

// ***--------------Получить список харкордных играков с временем больше 250 ----***

const hardcorPlayer = players.filter(player => player.timePlayed > 250);
console.table(hardcorPlayer);


