else if (event.key == 'ArrowRight'){
    positionX = positionX - 10
}
element3.style.top = `${positionY}px`
element3.style.right = `${positionX}px`
})


element4.addEventListener('click',()=>{
element4.style.width = "10px"
element4.style.height = "10px"
element4.innerHTML = ""
element4.style.opacity = .3
})


document.addEventListener('keyup', (event)=>{
if (event.key == 'j'){
    element4.style.width = "300px"
    element4.style.height = "50px"
    element4.style.opacity = 1
    element4.innerHTML = "<h4>Click me to make me small. <br> Press 'j' to bring me back. </h4>"
}
})


const list = ['running', 'paused']
let index = 0
element5.addEventListener('click',()=>{
element5.style.animationPlayState = list[index]
index = (index + 1) % 2
})
