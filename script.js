// -----------Common Doms
let HtmlBody = document.querySelector('.MainDiv')
let SearchInput = document.querySelector('.searchInput')
let AllUser = []

// --------------Api
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    AllUser = data
    renderUsers(data)
})

// --------------Search Function
SearchInput.addEventListener('input', ()=>{
    let FilterText = SearchInput.value.toLowerCase()
    let FilteredUser = AllUser.filter(user => user.username.toLowerCase().includes(FilterText))
    renderUsers(FilteredUser)
})

// --------------Execution
function renderUsers(user){
    HtmlBody.innerHTML = ''
    user.forEach(item =>{
        // --------Creating Elements
        let Container  = document.createElement('div')
        let ImgDiv     = document.createElement('div')
        let pfp        = document.createElement('img')
        let InfoDiv    = document.createElement('div')
        let idNo       = document.createElement('span')
        let Name       = document.createElement('span')
        let Username   = document.createElement('span')
        let DetailsDiv = document.createElement('div')
        let Email      = document.createElement('p')
        let Street     = document.createElement('p')
        let ZipCode    = document.createElement('p')
        let Suite      = document.createElement('p')
        // ------AppendChild
        HtmlBody.appendChild(Container)
        Container.appendChild(ImgDiv)
        ImgDiv.appendChild(pfp)
        Container.appendChild(InfoDiv)
        InfoDiv.appendChild(idNo)
        InfoDiv.appendChild(Name)
        InfoDiv.appendChild(Username)
        Container.appendChild(DetailsDiv)
        DetailsDiv.appendChild(Email)
        DetailsDiv.appendChild(Street)
        DetailsDiv.appendChild(ZipCode)
        DetailsDiv.appendChild(Suite)
        // --------Creating Elements Classname
        Container.classList.add('container')
        ImgDiv.classList.add('image')
        pfp.setAttribute('src' , 'images/ichigopfp.jpg')
        pfp.classList.add('pfp')
        InfoDiv.classList.add('info')
        idNo.classList.add('IdNo')
        Name.classList.add('name')
        Username.classList.add('username')
        Email.classList.add('Email')
        Street.classList.add('Street')
        ZipCode.classList.add('zipcode')
        Suite.classList.add('Suite')
        
        // ----------Data Print From api
        idNo.innerText = `Id : ${item.id}`
        Name.innerHTML = `${item.name}`
        Username.innerText = `${item.username}`
        Email.innerText  = `Email : ${item.email}`
        Street.innerText = `Street : ${item.address.street}`
        ZipCode.innerText = `Zip Code : ${item.address.zipcode}`
        Suite.innerText  = `Suite : ${item.address.suite}`
    })
    if(HtmlBody.innerHTML == ''){
        HtmlBody.innerHTML = `User Doesn't Exist`
    }

}
