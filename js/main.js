let menu = document.querySelector("#menu")
let nav = document.querySelector("#nav")
let line = document.querySelectorAll('li>span')

menu.addEventListener('click',()=>{
    nav.classList.toggle('tr')
    line[1].classList.toggle('lineTwo')
    line[0].classList.toggle('lineone')
    line[2].classList.toggle('linethree')
    
})
