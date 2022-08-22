// let arr1 = [345,56,7,86,436,'dfg','fgdssg','dsgrghs','segsdggr','gsrgddsdg',true];
// console.log(arr1);
//
// let arr2 = [];
// arr2[0]='abababba';
// arr2[1]= true;
// console.log(arr2);

// let arr3=[2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i=0;
// while(i<=arr3.length){
//     console.log(arr3[i])
//     i++
// }
// let i = arr3.lenght-1;
// while (i >= 0) {
//     console.log(arr3[i]);
//     i--;
// }
// 2. перебрати його циклом for
// for (let i = 0; i < 10; i++) {
//     console.log(arr3[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while(i<arr3.length){
//     console.log(arr3[i])
//     i=i+2;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(let i=1;i<arr3.length;i=i+2){
//     console.log(arr3[i]);
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while(i<arr3.length){
//     if (arr3[i] % 2 === 0) {
//         console.log(arr3[i]);
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let key = 0; key < arr3.length; key++) {
//     if (arr3[key] % 2 === 0) {
//         console.log(arr3[key]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// let arr3=[2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < 10; i++) {
//     if (arr3[i] % 3 === 0) {
//         arr3[i] = 'okten';
//
//     }
// }
//     console.log(arr3);
// 8. вивести масив в зворотньому порядку.
// let arr3=[2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr3.length-1; i >= 0; i--) {
//    let arr = arr3[i]
// console.log(arr);
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let mass = [23,45,765,456,65,434,6,5,7,78,'fdgdhd','gdhtrhd','dgshdth',true,false,true,false]
// for (const mass1 of mass) {
//     if (typeof mass1 === "string" ){
//         console.log(mass1)
//     }
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

let books = [
    {
        title:'Harry Potter',
        pages: 355,
        authers:['rowling'],
        genre:['first','second','third','fefgg']
    },
    {
        title:'Harry Router',
            pages: 385,
        authers:['petr 1'],
        genre:['first','second','third','fourth','fifth'],
    },

    {
        title:'Crazy frog',
        pages: 532,
        authers:['petr 53'],
        genre:['first','second'],
    }
];
let book = books[0]
for (let i=0; i<books.length; i++){
    if(book.genre.length<books[i].genre.length){
        book=books[i]
    }

}
console.log(book);


// let maxbook = books[0]
// for (const book of books) {
//     if (maxbook.genre.length<book.genre.length) {
//         maxbook=book
//     }
//
// }
// console.log(maxbook)