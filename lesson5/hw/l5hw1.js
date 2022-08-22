// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle(a,b){
//     x = a * b;
//     console.log(x)
//     return x ;
// }
// rectangle(10,20)


// const foo= (a,b) => a*b;
// console.log(foo(10,5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let pi=3.14;
// function foo(pi,r){
//     rad= pi * r ** 2;
//     console.log(rad);
//     return rad;
// }
// foo(pi,10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let pi = 3.14;
// function foo(h,r){
//     s = 2 * pi * r * h;
//     console.log(s);
//     return s;
// }
// foo(10,10)
// - створити функцію яка приймає масив та виводить кожен його елемент
// function arr(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//
//     }
// }
// arr([1,45,65,true])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(text) {
//     document.write(`<p> ${text} </p>`);
// }
// paragraf(`ababahalamaga `)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text){
//     document.write
//     (`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// foo(`meison`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//  function foo5(text,count){
//
//     document.write(`<ul>`)
//      for (let i = 0; i < count; i++) {
//
//          document.write(`    <li>${text}</li>   `)
//
//      }
//      document.write(`</ul>`)
//  }
//  foo5(`ttttt`,4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array=[12,'fgfgg',true]
// function arr(array){
//     document.write(`<ol>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ol>`)
// }
// arr(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let mass=[
//     {id:1,name:'petr',age:22},
//     {id:2,name:'luis',age:25},
//     {id:3,name:'adam',age:27}
// ]
// function foo(array){
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name}  ${arrayElement.age}</div>`)
//     }
//
// }
// foo(mass)
// - створити функцію яка повертає найменьше число з масиву

let mas=[1,3,4,5,7,-1]
function smallest(arr){
    let min = arr[0];
    for (const minElement of arr) {
        if (minElement < min){
            min = minElement;
        }

    }
return min;
}
console.log(smallest(mas));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let summass=[1,34,5]
function sum(array){
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement
    }
    return sum;

}

console.log(sum(summass));