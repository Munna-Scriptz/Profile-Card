let HtmlBody = document.querySelector('body')


// --------Creating Elements
let Container = document.createElement('div')
let ImgDiv    = document.createElement('div')
let pfp       = document.createElement('img')
let InfoDiv   = document.createElement('div')
let idNo      = document.createElement('span')
let Name      = document.createElement('span')
let job      = document.createElement('span')
// ------AppendChild
HtmlBody.appendChild(Container)
Container.appendChild(ImgDiv)
ImgDiv.appendChild(pfp)
Container.appendChild(InfoDiv)
// --------Creating Elements Classname
Container.classList.add('container')
ImgDiv.classList.add('image')
pfp.setAttribute('src' , 'images/ichigopfp.jpg')
pfp.classList.add('pfp')
InfoDiv.classList.add('info')
