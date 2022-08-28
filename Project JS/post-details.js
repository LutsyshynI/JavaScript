//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)




let searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(post => renderPage(post));

function renderPage(post) {
    let postDetaild = document.createElement('div')
    postDetaild.classList.add('postDetaild')
    postDetaild.innerText = JSON.stringify(post, null, 2)

    let button = document.createElement('button')
    button.classList.add('postDetButton')
    button.innerText = 'Show comments'


    button.onclick = function (ev){
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(res => res.json())
    .then(comments =>{

        let comDiv = document.createElement('div')
        comDiv.classList.add('comDivPD')
        for (const coment of comments) {

            let div = document.createElement('div')
            div.classList.add('commentsBlock')
            div.innerText = JSON.stringify(coment,null,2)
            comDiv.appendChild(div)
        }


    document.body.appendChild(comDiv)
        })


    }

    document.body.append(postDetaild,button)
}
