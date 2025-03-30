const nav = document.querySelector('.nav')

window.addEventListener('scroll', () =>{
    if (wind.scrollY > 160){
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})
