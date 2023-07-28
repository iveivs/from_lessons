// ЗАМЫКАНИЯ
// https://www.youtube.com/watch?v=zL9Q4WaJIBo&t=1178s

// шаг 1
// function createStep () {
//     let count = 0
//     return function () {
//         count++
//         console.log(count);
//     }
// }

// console.log(createStep());

// let vyzov111 = createStep() 
// let vyzov222 = createStep() // при таком  присвоении функции у неё всегда возникает своя собственная область видимости

// vyzov111() // 1
// vyzov111() // 2
// vyzov111() // 3 
// vyzov222() // 1
// vyzov111() // 4

// ШАГ 2
// function createStep (n = 0) {
//     let count = n
//     return function () {
//         count++
//         console.log(count);
//     }
// }

// console.log(createStep());

// let vyzov111 = createStep() 
// let vyzov222 = createStep(200) // при таком  присвоении функции у неё всегда возникает своя собственная область видимости

// vyzov111() // 1
// vyzov111() // 2
// vyzov111() // 3 
// vyzov222() // 1
// vyzov111() // 4


// Задачка про попрошайку(улучшение с помощью замыкания)
// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max - min)
//     return Math.floor(rand)
// }
// function createBeggar() {
//     let sum = 0
//     return function beggar() {
//         sum += randomInteger(0, 100)
//         console.log(sum);
//         if(sum >= 200) return
//         beggar()
//     }
// }

// let beg1 = createBeggar()
// beg1()
// - - - 

// РАБОТА С РАЗНЫМИ ФАЙЛАМИ('a.js' 'b.js')

// let p // (см. другие файлы('a.js' 'b.js'))

// - - - - - - - - - - - - - - - - - - 
// Vladlen Minin
// function crateCalcFunction(n) {
//     return function() {
//         console.log(1000 * n );
//     }
// }
// const calc = crateCalcFunction(12)
// calc()
// - - - - - 

// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addOne(20))

// console.log(addTen(10))
// console.log(addTen(20))
// - - - - - -

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// console.log(ruUrl('yandex'));
// console.log(ruUrl('vk'));
// - - - - - - - - - - - - - - - - -

// более сложный пример
// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
// const person2 = {name: 'Елена', age: 19, job: 'SMM'}

// bind(person1, logPerson)()
// bind(person2, logPerson)()


// Pomazkov
// https://www.youtube.com/watch?v=mI6Jcfsgma4

function createIncr() {
    let count = 0
    function increment() {
        count++
    }
    let message = `Count is - ${count}`
    function log() {
        console.log(message);
    }
    return [increment, log]
}

const [increment, log] = createIncr()
increment()
increment()
increment()
log() // что выведется в консоль?
