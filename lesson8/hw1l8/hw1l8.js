// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
//
// users.push(new User(1, 'vova', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(2, 'petro', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(3, 'maks', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(4, 'ihor', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(5, 'oleksandr', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(6, 'stepan', 'bandera', 'fffff@gmail.com', 23421431))
// users.push(new User(7, 'irynka', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(8, 'popis', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(9, 'step', 'ostapchyk', 'fffff@gmail.com', 23421431))
// users.push(new User(10, 'vova', 'ostapchyk', 'fffff@gmail.com', 23421431))
// console.log(users);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// let filteredbyid = users.filter(value => value.id % 2 === 0);
// console.log(filteredbyid);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// // let sort = users.sort((a, b) => a.id - b.id ); // фільтр по зростанню
// let sort = users.sort((a, b) => b.id - a.id); // фільтр по спаданню
// console.log(sort);
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = []
// clients.push(new Client(1, 'vova', 'ostapchyk', 'fffff@gmail.com', 23421424, [1, 3, 4, 5]))
// clients.push(new Client(2, 'petro', 'ostapchyk', 'fffff@gmail.com', 23421431, [12, 43, 23]))
// clients.push(new Client(3, 'maks', 'ostapchyk', 'fffff@gmail.com', 23421431, [14, 44, 77]))
// clients.push(new Client(4, 'ihor', 'ostapchyk', 'fffff@gmail.com', 23421431, [55, 67, 99]))
// clients.push(new Client(5, 'oleksandr', 'ostapchyk', 'fffff@gmail.com', 23421431, [1]))
// clients.push(new Client(6, 'stepan', 'bandera', 'fffff@gmail.com', 23421431, [2]))
// clients.push(new Client(7, 'irynka', 'ostapchyk', 'fffff@gmail.com', 23421431, [34, 77]))
// clients.push(new Client(8, 'popis', 'ostapchyk', 'fffff@gmail.com', 23421431, [345]))
// clients.push(new Client(9, 'step', 'ostapchyk', 'fffff@gmail.com', 23421431, [777]))
// clients.push(new Client(10, 'vova', 'ostapchyk', 'fffff@gmail.com', 23421431, 65, 44))
//
// console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// console.log(clients.sort((a, b) => a.order.length - b.order.length));
// //
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxspeed, motor) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.motor = motor;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     // this.info = function () {
//     //     console.log(`model -- ${model}`)
//     //     console.log(`producer -- ${producer}`)
//     //     console.log(`year -- ${year}`)
//     //     console.log(`maxspeed -- ${maxspeed}`)
//     //     console.log(`motor -- ${motor}`)
//     //
//     // }
//     this.info = function (){
//         for (const argument in this) {
//             if(typeof this[argument] !== "function"){
//                 console.log(`${argument}--${this[argument]}`)
//             }
//
//         }
//     }
//     this.increaseMaxSpeed = function (newspeed){
//         this.maxspeed += newspeed
//     }
//     this.changeyear = function (newyear) {
//         this.year = newyear
//
//     }
//     this.adddriver = function (driver) {
//     this.driver = driver;
//
//     }
// }
//
//
// let car = new Car('kia', 'korea', 2020, 200, 2.0)
// car.info()
// car.changeyear(2021)
// car.adddriver({name:'vasyl', age: 22 })
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car1 {
    constructor(model, producer, year, maxspeed, motor) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.motor = motor;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    info(){
        console.log(`model -- ${this.model}`)
        console.log(`producer -- ${this.producer}`)
        console.log(`year -- ${this.year}`)
        console.log(`maxspeed -- ${this.maxspeed}`)
        console.log(`motor -- ${this.motor}`)

    }
    increaseMaxSpeed(newspeed) {
        this.maxspeed += newspeed
    }
    changeyear(newyear){
        this.year = newyear;
    }
    addDriver(driver){
        this.driver  = driver;
    }

}

let car1 = new Car1('vw','german',2015,300,3.0)

car1.drive()
car1.info()
car1.increaseMaxSpeed(20)
console.log(car1);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cindirella {

    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }
}
let c1 = new Cindirella('Alina',22,36)
let c2 = new Cindirella('Alina',23,38)
let c3 = new Cindirella('Alina',25,34)
let c4 = new Cindirella('Alina',24,40)
let c5 = new Cindirella('Alina',26,36.5)
let c6 = new Cindirella('Alina',22,39)
let c7 = new Cindirella('Alina',21,36)
let c8 = new Cindirella('Alina',20,38)
let c9 = new Cindirella('Alina',16,35)
let c10 = new Cindirella('Victoriya',18,37)

let arr = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10]

class Prince extends Cindirella{
    constructor(name,age,findsize) {
        super(name,age);
        this.findsize = findsize;
    }
}
let p = new Prince('petya',23,37)

let find = function (arr,p){
    for (const arrElement of arr) {
        if (p.findsize === arrElement.footSize) {
            return `my cindirella is ${arrElement.name}`
        }

    }
}
console.log(find(arr, p));

let cindirella = arr.find(value => p.findsize === value.footSize );
console.log(cindirella);



