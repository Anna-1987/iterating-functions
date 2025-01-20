// Array.prototype.reduce()
//     - Поэлементно перебиоает оригинальный масси
//     - Возвращает что угодно
// НО ИСПОЛЬЗОВАИТЬ НУЖНО С УМОМ

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => {
    
    console.log('number', number);
    console.log('acc', acc);

    return acc + number;
    
}, 0)
console.log(total);
    

// ******** как работает reduce*****************

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25



// ***------------Считаем общию зарплату--------***

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, sal) => {
    return acc + sal;


}, 0);

console.log('totalSalary', totalSalary);

// ***----------- считаем общие кол-во часов--------***

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


const totalTimePlayed = players.reduce((acc, player) => {
    
    return acc + player.timePlayed;
}, 0);

console.log('totalTimePlayed', totalTimePlayed);


// ***---------- считаем общию сумму товаров корзины---------***

const cart = [
    { lable: 'Apples', price: 100, quantity: 2 },
    { lable: 'Dananas', price: 120, quantity: 3 },
    { lable: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
    
}, 0);

console.log('totalAmount', totalAmount);

// ***----------------Собираем все теги из твитов----------****

const tweets = [
    { id: '000', likees: 5, tag: ['js', 'nodejs'] },
    { id: '001', likees: 2, tag: ['html', 'css'] },
    { id: '002', likees: 17, tag: ['html', 'js', 'nodejs'] },
    { id: '003', likees: 8, tag: ['css', 'react'] },
    { id: '004', likees: 0, tag: ['js', 'nodejs', 'react'] },
    
];


const allTag = tweets.reduce((tags, tweet) => {
    
    // tags.push(...tweet.tag);
    // return tags;              // лучше так НЕ делать
    
     return [...tags, ...tweet.tag]  // лучше так ДЕЛАТЬ
}, []);

console.log('allTag', allTag);


// ***--------------- ведем статистику тегов-------***

// const tagsStats = allTag.reduce((acc, tag) => {
//     if (acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }
//     acc[tag] = 1;
//     return acc;
// }, {});


// ******* лучше способ для подсчета тегов***************
const tagsStats = allTag.reduce((acc, tag) => {
return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
};
}, {});

console.log('tagsStats', tagsStats);