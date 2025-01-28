// Array.prototype.sort(callback(currentValue, nextEl){})
//     - Сортирует и ИЗМЕНЯЕТ оригинальный массив
//     - По умолчанию:
//        - сортирует по возрастанию
//        - приводит елементы в строке и сортирует по Unicode


const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
console.log('numbers', numbers);


// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);



// !!!! Сортировка по ВОЗРОСТАНИЮ происходит по следующиму правилу:
// от текущего елемента массива (curEl) отнимаем следующий елемент массиа (nexEl)
// если результат отрицательный то елементы меняются местами
// если результат положительный то елементы остаются на своих местах

numbers.sort((curEl, nexEl) => {
    return curEl - nexEl;
});
console.log(numbers);


// !!!! Сортировка по УБЫВАНИЮ
numbers.sort((curEl, nexEl) => {
    return nexEl - curEl;
});

console.log(numbers);


// **** Как сделать копию массива, чтобы не сортировать оригинальный
// -Array.prototype.slice()
// Операция Spread

const copy = [...numbers];
console.log('сравнение массивов', copy === numbers);
console.log('copy', copy);

// **** Как развернуть массив
const copyRevers = copy.reverse();
console.log('copyRevers', copyRevers);

// ****------Кастомная сортировка

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// **** сортируем по игровому времени

const sorteByBestPlayers = [...players].sort((prevPlayer, nextPlayr) => {
    return nextPlayr.timePlayed - prevPlayer.timePlayed;
});

console.table(sorteByBestPlayers);

// ****  сортируем по имени в алфавитном порядке

const byName = [...players].sort((
    firstName, nextName) => {
    const result = firstName.name > nextName.name;

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});

console.table(byName);


// **** ----- абстрактный пример c методом flat

const array = [1, 2, [4, [5]], [6, [7, 8,[9]]]];

console.log(array.flat(3));

// **** ------- комбинация map + flat ------

const tweets = [
    { id: '000', likees: 5, tag: ['js', 'nodejs'] },
    { id: '001', likees: 2, tag: ['html', 'css'] },
    { id: '002', likees: 17, tag: ['html', 'js', 'nodejs'] },
    { id: '003', likees: 8, tag: ['css', 'react'] },
    { id: '004', likees: 0, tag: ['js', 'nodejs', 'react'] },
    
];

// const allTag = tweets.reduce((tags, tweet) => {[...tags, ...tweet.tag]}, []);

const allTag = tweets.map(t => t.tag).flat(); // хуже производительность
const allTag2 = tweets.flatMap(t2 => t2.tag); // лучше использовать flatMap

console.log('allTag', allTag);
console.log('allTag2', allTag2);
