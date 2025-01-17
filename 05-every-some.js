// Array.prototype.every()
//     - Поэлементно перебиоает оригинальный масси
//     - Возвращает true если все элементы удовлетворяют условию или undefined

// *****************************************************************

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// ***-------- Проверяем все ли игроки online-----**

const isAllOnline = players.every(player => player.online);
console.log(isAllOnline); // false потому что не все игроки online


// Array.prototype.some()
//     - Поэлементно перебиоает оригинальный масси
//     - Возвращает true если хотябы один элемент удовлетворяют условию или undefined

// *********************************************************************

const isAnyOneOnline = players.some(player => player.online);
console.log(isAnyOneOnline);// true потому что хотя бы один игрок есть online

