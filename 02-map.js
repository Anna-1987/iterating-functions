// Array.prototype.map()
//     - Поэлементно перебирает оригинальный массив
//     - Не изменяет оригинальный массив
//     - озврщвает новый массив такой же длины

// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map(function (number) {
//      console.log(number);

//     return number * 2;
// }
//  );
// console.log('numbers', numbers);
// console.log('doubleNums', doubleNums);

// *****************************************************************

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
]


//***--------------- Получаем массив имен всех играков-----------***

const playerNames = players.map(player => { 
    console.log(player);
    return player.name;
});
console.log('playerNames', playerNames);



const playerIds = players.map(player => player.id);
console.log('playerIds', playerIds);


// ***------------Увеличиваем кол-во пщинтовв каждого игрока на 10%-----**

const upatedPlayers = players.map(player => {
    return {
        ...player,
        points: player.points * 1.1,

    };
});

console.table(upatedPlayers);


// ***---------- Увеличить время игрока по id---------***

const playerIdToUpdate = 'player-3';

const upatedPlayers2 = players.map(player => {
    if (player.id === playerIdToUpdate) {
        return {
            ...player,
           timePlayed: player.timePlayed + 100,
      };
    }
    return player;
});

// const playerIdToUpdate = 'player-3';

// const upatedPlayers2 = players.map(player => 
//     player.id === playerIdToUpdate
//         ? {...player,
//            timePlayed: player.timePlayed + 100,
//       } : player,
// );
console.table(upatedPlayers2);
