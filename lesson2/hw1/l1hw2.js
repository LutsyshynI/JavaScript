// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let car = ['audi','mercedes','vw','jeep','toyota','chrysler','bmw','tesla','kiwi','peugeot']
console.log(car);
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);
console.log(car[3]);
console.log(car[4]);
console.log(car[5]);
console.log(car[6]);
console.log(car[7]);
console.log(car[8]);
console.log(car[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Harry Potter',
    pageCount: 360,
    genre: 'fantazy'
};
console.log(book1)
let book2 = {
    title: 'dreamone',
    pageCount: '220',
    genre: 'rom',
};
console.log(book2)
let book3 = {
    title: 'green mile',
    pageCount: '500',
    genre: 'the horrors',
};
console.log(book3)



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let firstbook = {
    title: 'Harry Potter',
    pageCount: 360,
    genre: 'fantazy',
    authors:[
        {
        name: 'Joan Rowling',
        age: 53,
        },
    ]

};
console.log(firstbook)
let secondbook = {
    title: 'dreamone',
    pageCount: '220',
    genre: 'rom',
    authors: [{
        name:'Blake Pierce',
        age: 40,
    }]

};
console.log(secondbook)
let thirdbook = {
    title: 'green mile',
    pageCount: '500',
    genre: 'the horrors',
    authors:[{
        name: 'Robert',
        age: 34,

    }]
};
console.log(thirdbook)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'jhhlj', age: 23, password: 'dsfsfsrg'},
    {name: 'jhhlj', age: 24, password: 'dhyjyj'},
    {name: 'jhhlj', age: 25, password: 'yjyjyjyjyr'},
    {name: 'jhhlj', age: 26, password: 'dhththth'},
    {name: 'jhhlj', age: 27, password: 'dsdstht'},
    {name: 'jhhlj', age: 28, password: 'ddsthtdht'},
    {name: 'jhhlj', age: 29, password: 'jtjytht'},
    {name: 'jhhlj', age: 30, password: 'tyuii'},
    {name: 'jhhlj', age: 31, password: 'q3wregh'},
    {name: 'jhhlj', age: 31, password: 'vfghyjuk'},
    {name: 'jhhlj', age: 32, password: 'ert4rutjk'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
console.log(users[10].password)
