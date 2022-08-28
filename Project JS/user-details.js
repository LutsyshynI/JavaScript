let searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('id');

console.log(id);
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(user => renderPage(user));

function renderPage(user){
 let userDiv = document.createElement('div')
userDiv.innerText = JSON.stringify(user,null,2)
    userDiv.classList.add('userDiv')
 document.body.appendChild(userDiv)

 let button = document.createElement('button')
 button.innerText = 'post of current user'
    button.classList.add('postofCurentUser')
 document.body.appendChild(button)
 button.onclick = function (){
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(res => res.json())
      .then(posts =>{

        let mainDiv = document.createElement('div')
          mainDiv.classList.add('mainDivUD')

       for (const post of posts) {
        let div = document.createElement('div')

        div.innerText = post.title
           let button = document.createElement('button')
           button.innerText = 'post details'
           button.classList.add('titleButtonUD')
           button.onclick = function (event){
            window.location.href = `/JavaScript/Project JS/post-details.html?id=${post.id}`
        }
        let elementBlock = document.createElement('div')
           elementBlock.classList.add('elementBlockUD')
           elementBlock.append(div,button)
        mainDiv.append(elementBlock)
       }
       document.body.appendChild(mainDiv)


      })
 }}

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
