'use strict'

const arr1 = [2, 2 , 1, 8, 16];

const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');

// ШАГ 1

// function f1() {
//     arr1[3] = arr1[3] * 2;
//     // out1.innerHTML = arr1; // убираем запятые  - out1.innerHTML = arr1.join('')
//     showArr(arr1, out1);
// }

// // ещё один способ убрать запятые или заменить их:
// function showArr(arr, block) {
//     let out = '';
//     for (let i = 0; i < arr.length; i++) {
//         out += arr[i] + '_';
//     }
//     block.innerHTML = out;
// }

// f1();

// ШАГ 2

function f1(arr, myFunc, block) {
    arr[3] = arr[3] * 2;
    // out1.innerHTML = arr1; // убираем запятые  - out1.innerHTML = arr1.join('')
    myFunc(arr, block);
}

// ещё один способ убрать запятые или заменить их:
function callback(arr, block) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + '_';
    }
    block.innerHTML = out;
}

function callback2(arr, block) {
    block.innerHTML = arr.join('*')
}

f1(arr1, callback, out1);
f1(arr1, callback2, out2);

// пример классического callback из документации

function squad(item) {
    return item ** 2;
}
// - - -
// const arr2 = arr1.map(squad)
// то же самое, что строчкой выше, только через анонимную функцию
const arr2 = arr1.map((item) => {
    return item ** 2; 
})
// - - -

callback(arr2, out3);