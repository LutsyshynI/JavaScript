let str = 'hello world'
console.log(str[0],str[1]);
console.log(str.length);
for (const strElement of str) {
    console.log(strElement);
}

let s = str.concat(' end world'); // додати до стрінги
console.log(s);
console.log(str.toUpperCase()); // до великих букв
console.log(s.toLowerCase()); // до малих букв
console.log(s.startsWith("he", 2)); //чи починається з he; 2 - з якого індексу починати шукати
console.log(s.endsWith("ld")); // те саме але з кінця
console.log(s.substring(2, 7)); // вирізаємо з 2 по 7 не включно
console.log(s.indexOf('o', 2)); // пошук індексу літеи о, 2- починаючи з 2гого індексу
console.log(s.lastIndexOf('w')); // те саме але з ліва на право

let user = 'petro-22'
let indoftyre = user.indexOf('-');
let name = user.substring(0,indoftyre);
console.log(name);
let age = user.substring(indoftyre+1,user.length)
console.log(age);

console.log(s.charAt(6));// побачити елемент яких шостий за індексом
console.log(s.replace('e', '!')); // замінити е на !
console.log(s.replaceAll('e', '!')); // замінити всі е на !

let user2 = 'vasya-42-190';
let split = user2.split('-');
console.log(split);
//  split - розподіляє по 'x' в нашому випадку "x" - '-' і розділяє на масиви не включаючи -
let split1 = user2.split(/[-:]/); // це регулярний вираз який розділяє і по декількох елементах

// array metods
let arr = [];
console.log(Array.isArray(arr)); // запитуєм чи arr є масивом
arr.push('hello');// додати в кінець масиву новий елемент
arr.push('world');
console.log(arr);
let pop = arr.pop();// мягке видалення
console.log(arr);
console.log(pop);// видалений елемент з кінця
arr.unshift('planet') // додати елемент на початок(зсунути їх праворуч)
console.log(arr);
arr.shift()//видалити преший елемент
console.log(arr);
let arr2 = [
    {name:'vasia',age:21,status:true},
    {name:'petya',age:20,status:false},
    {name:'koli',age:25,status:false},
    {name:'olia',age:26,status:false},
    {name:'katja',age:19,status:true},
    {name:'lesa',age:55,status:false},
    {name:'vira',age:78,status:true},
    {name:'kokos',age:44,status:false},
    {name:'vita',age:28,status:false},
    {name:'max',age:29,status:false}
]
// arr2.splice(0,2) // видаляє елемети 1зн-починаючи з, 2зн- к-сть ел які потрібно видалити і можна вставити 3зн-вставлення напр "новий ел арр"
// console.log(arr2);
// arr2.splice(5,0,'hoho') // можна також просто вставити елемент(рідко використовкється)
// console.log(arr2);
// arr.slice(0,2)// вирізаєм елементи з індексом 0 оп 2 не вкл
// let concat = arr2.concat(1,2,3);  додаємо до масиву arr2 нові елем...
// let concat = arr2.concat([1,2,3]); або масив, але обовязково повертає поновлений масив
// console.log(concat);

let asd = function (us){
    if(us.status){
        console.log(us);
    }
}
arr2.forEach(asd) // описуєм функцію, приймає якусь функцію і ітерує як цикли
// forEach - метод в якому вбудований цикл
// скорочення
arr2.forEach((us) => {
        if (us.status) {
            console.log(us);
        }
    })
// filter( має в собі return)
// за допомогою стрілочної функції(саме економніше)
let filter1 = arr2.filter(value => value.age < 20 );
console.log(filter1);


let filter = arr2.filter(function (value){
    return !value.status
    })
console.log(filter);

// можна зробити за допомогою ітерацій( з минулих уроків)
// let user3 = []
// for (const arr2Element of arr2) {
//     if (arr2Element.age > 26){
//         user3.push(arr2Element)
//     }
// }
//     console.log(user3);

// map( приймає ціляй мачив, може повертати будь який обєкт з нього
let map = arr2.map(value => value.name);
console.log(map);// повернули масив імен
let map2 = arr2.map(value => ({name:value.name, age:value.age}));
console.log(map2);

// forEach,map може приймати декілька елементів
// let map3 = arr2.map(value,index,)

// let map4 = arr2.map((user,index) => {
//     return {
//         namr:user.name,
//         age:user.age,
//         id:index
//     }
// })
// console.log(map4);

let map5 =  arr2.map((user,index)=>({...user,id:index}));
console.log(map5);
// ...user - spred operator, приймає всі елементи нашого масиву і видодить його в новий
// find - оператор пошуку, знаходить лише перше ходження
let find = arr2.find(value => value.mame === 'max')

// sort сортування
let sort = arr2.sort((us1, us2) => us1.age - us2.age );
console.log(sort);
// сортування по алфавіту (asci code)
let sort1 = arr2.sort((us1,us2) => {
    if (us1.name > us2.name){
        return 1
    }
    if (us1.name < us2.name){
        return -1
    }
        if (us1.name === us2.name){
            return 0
        }
    }
)
console.log(sort1);
// по довжині імені
let sort2 = arr2.sort((a,b) => a.name.lenght - b.name.lenght)
console.log(sort2);

// reduce розфасувати масив на обєкти(метод масиву)
let reduce = arr2.reduce(function (acum,user) {
if (user.status){
    acum.statustrue.push(user);
} else {
    acum.statusfaelse.push(user);
}
return acum
},{statustrue: [] ,statusfaelse: [] })
console.log(reduce);