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


    button.onclick = function (ev) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(res => res.json())
            .then(comments => {

                let comDiv = document.createElement('div')
                comDiv.classList.add('comDivPD')
                for (const coment of comments) {

                    let div = document.createElement('div')
                    div.classList.add('commentsBlock')
                    div.innerText = JSON.stringify(coment, null, 2)
                    comDiv.appendChild(div)
                }


                document.body.appendChild(comDiv)
            })


    }

    document.body.append(postDetaild, button)
}
