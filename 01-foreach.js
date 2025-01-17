// Array.prototype.forEach(callback(currentValue, index, array), thisArg)
//     - Поэлементно перебираут оригинальный массив
//     - Ничего возвращает
//     Занимает классический for, если не нужно прерывать цикл

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {
    console.log ('nuber', number)
})