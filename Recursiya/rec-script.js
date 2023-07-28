// let count = 0
// function f1 () {
//     count ++
//     console.log(count);
//     if(count === 100) return
//     f1()
// }
// f1()

// - - - - - - - - - - - 
// цикл

// function f2() {
//     let out = ''
//     for (let i = 1; i <= 30; i++) {
//         out += i + ' '
//     }
//     console.log(out);
// }

// f2()

// то же самое, но через рекурсию
// let i = 0
// let out = ''
// function f3() {
//     i++
//     out += i + ' '
//     if(i >= 30) return
//     f3()
// }
// f3()
// console.log(out);

// Задачка о попрошайке(как быстро он наберёт нужное количество монет)
// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max - min)
//     return Math.floor(rand)
// }
// let summa = 0
// function moneyRecursion() {
//     let monety = randomInteger(0, 100)
//     console.log('add ' + monety);
//     summa += monety
//     console.log('sum ' + summa);
//     if(summa > 300) return
//     moneyRecursion()
// }
// moneyRecursion()

// тоже самое но через цикл
// function moneyCicle() {
//     let sum2 = 0
//     while(true) {
//         let monety = randomInteger(0, 100)
//         console.log('add ' + monety);
//         sum2 += monety
//         console.log('sum ' + sum2);
//         if(sum2 > 300) return
//     }
// }
// moneyCicle()


// вывод списка родителей в объекте
// const users = {
//     'ivanov': {
//         age: 25,
//         parent: {
//             "ivanov-a": {
//                 age: 45
//             },
//             "ivanov-b": {
//                 age: 43,
//                 parent: {
//                     'sergeev': {
//                         age: 88,
//                         parent: {
//                             "leontiev": {}
//                         }
//                     },
//                 }
//             }
//         }
//     },
//     "kostenko": {
//         age: 56,
//         parent: {
//             "ignatenko": {

//             },
//             "syroejkin": {
//                 age:45
//             }
//         }
//     }
// }

// function userParentRecursion(obj) {
//     if(obj.parent !== undefined) {
//         for(let key in obj.parent){
//             console.log(key);
//             userParentRecursion(obj.parent[key])
//         }
//     }
// }

// for(let key in users) {
//     userParentRecursion(users[key])
// }

// ================================

// Факториал через цикл
function fact1(n) {
    let sum = 1
    for (let i = 1; i <= n; i++) {
        sum = sum * i
    }
    console.log(sum);
}
fact1(5)

// Факториалл через рекурсию
let sum = 1 
function fact2(n) {
    if( n === 0) return
    sum = sum * n
    fact2(n - 1)
}
fact2(5)
console.log(sum);