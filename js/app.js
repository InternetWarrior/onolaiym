
// Я знаю,что я говнокодил, но так пришлось XD
// I know I made it complicated, but I really had to!

const exactlyMore = document.querySelector('.moreContainer')
const serviceMore = document.querySelector('#serviceMore')
const projectsMore = document.querySelector('#projectsMore')
const partnersMore = document.querySelector('#partnersMore')
const contactsMore = document.querySelector('#contactsMore')



addEventListener('keydown', e =>{
    
    if(e.key === 'Escape'){
        close1()
        close2()
        close3()
        close4()
    }
})



function open1(){
    projectsMore.classList.remove('closed')
}

function open2(){
    serviceMore.classList.remove('closed')
}

function open3(){
    partnersMore.classList.remove('closed')
}
function open4(){
    contactsMore.classList.remove('closed')
}

function close1(){

    projectsMore.classList.add('closed')
}

function close2(){

    serviceMore.classList.add('closed')
}

function close3(){

    partnersMore.classList.add('closed')
}

function close4(){

    contactsMore.classList.add('closed')
}











