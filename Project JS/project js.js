let mainDiv = document.createElement('div')
mainDiv.classList.add('mainDiv')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => users.forEach(user => {

        let userBlock = document.createElement('div')
        userBlock.classList.add('userBlock')


        let usersDiv = document.createElement('div')
        usersDiv.innerText = user.id + "-" + user.name
        document.body.appendChild(usersDiv)

        let userDetailsButt = document.createElement('button')
        userDetailsButt.innerText = 'User Details'
        userDetailsButt.id = user.id
        userDetailsButt.onclick = function (event) {
            console.log(event.target.id)
            window.location.href = `/JavaScript/Project JS/user-details.html?id=${event.target.id} `

        }

        userBlock.append(usersDiv,userDetailsButt)
        mainDiv.appendChild(userBlock)

        document.body.appendChild(mainDiv)


    }))

