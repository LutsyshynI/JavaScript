// console.log('start');
// try {                        // пробує чи є помилка,помилка стопає весь код
//     console.log(errorRef);
// } catch (e) {               // зловив помилку, після нього код надалі працює
//     console.log(e);
// } finally {                  // виконуєтсья не зважаючи на помилку
//     console.log('finaly');
// }
// console.log('end');
//
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error('b is zero')   // зробили штучну помилку
//     }
//     return a / b
// }
//
// try {
//     divide(10, 0)
// } catch (e) {
//     console.log(divide(10, 1));
// }
//
// //---------- OCO(Optional chain operator)  Оператор опціональної послідовності-------------
//
// let user = {
//     name: 'kolia'
// };
// // ?запитує ям є в user wife якщо ні то не буде виконувати наст сегмент
// user.wife?.name
// // or
// if (user.wife) {
//     console.log(user.wife.name);
// }
// // два варіанти еквівалентні між собою
//
// // objects ES6
// let name = 'vasya'
// let age = '23'
// let user1 = {
//     // name: name,
//     // age: age,
//     name,
//     age,
//     // greeting:function (){
//     //     console.log('hi');
//     // }
//     // Скорочення
//     greeting() {
//         console.log('hi');
//     }
// }
// console.log(user1);
// user1.greeting()
//
// // ------------destructuring-------------------------
// let user3 = {
//     name1: 'olia',
//     age1: 20,
//     status1: true
// }
// let nameo = user3.name
// // or
// let {name1, age1, status1} = user3;
// console.log(name1, age1, status1)

// function f({name,age}){
//
// }
//
// let f1 = f({name: 'olja', age: 20});
// console.log(f1);

// let user4 = {
//     name: 'Andriy',
//     age: 25,
//     status1: true,
//     wife: {
//         name: 'nata'
//     }
// }
// let {wife: {name}, name: username} = user4;
// console.log(name);
// console.log(username); // name:username username це псевдонім для name  щоб не повторювались
//
// let nums = [11, 22, 33];
// let [a,b,c] = nums
// console.log(a,b,c)
//
// ;

// let user = {
//     name: 'Andriy',
//     age: 25,
//     status1: true,
//     wife: {
//         name: 'nata'
//     }
// }
// // два метода скопіювати наш обєкт але силки в середі будуть еквівалентні
// let kokos = {
//     ...user
// }
// console.log(kokos === user); // false
// console.log(kokos.wife === user.wife); // true
// // or
// let kokos2 = Object.assign({}, user);
//
//
// // ------------------JSON deep copy----------------------------
// let userJSON = JSON.stringify(user) // перетворили user в стрінгу
// let parseuser = JSON.parse(userJSON) // перетворили на обєкт
// console.log(parseuser);
// console.log(user === parseuser); // false
// console.log(user.wife === parseuser.wife); // false
// let users = JSON.parse(JSON.stringify(user)); скорочена сиетаксична конструкція
// Але якщо ми захочемо передати новий обєкт в юзер то він в parseuser не зявиться, бо JSON передає тільки інформацію а не поведіку

// ------------ closures(замикання)---------------------

function userBuilder(name, age) {
    let user = {name, age}
    return {
        getname() {
            return user.name;
        },
        getage() {
            return user.age
        },
        setage(age) {
            if (age > 0) {
                age = user.age
            }

        },
        info(){
            return{...user};
        }
    }
}
let ret = userBuilder('ihor',24);
console.log(ret);
ret.setage( 25)
console.log(ret.getage());
console.log(ret.info());
