// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let x = -3;
if (x !== 0) {
    console.log('true')
}else {
    console.log('false')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 55;

if (time > 0 && time <= 15) {
    console.log('перша чверть');
}else if (time > 15 && time <= 30){
    console.log('друга чверть');
}else if (time > 30 && time <=45){
    console.log('третя чверть');
}else if (time > 45 && time <= 60){
    console.log('четверта чверть');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 20;
if (day >= 1 && day <= 10){
    console.log('перша декада');
} else if (day >= 11 && day <= 20){
    console.log('друга декада');
} else if (day >= 21 && day <= 31){
    console.log('третя декада');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let dayofweek = 3;

switch (dayofweek){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Suterday')
        break;
    case 7:
        console.log('Sunday')
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 22;
let b = 19;

if (a > b){
    console.log(a)
}else if(b > a){
    console.log(b)
}else if(a===b){
    console.log(a)
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xx = '' || 'default';
console.log(xx);