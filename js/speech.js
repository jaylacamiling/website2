const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: 'js/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: 'js/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: 'js/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: 'js/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: 'js/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: 'js/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: 'js/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: 'js/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: 'js/outside.jpg',
        text: "I Want To Go Outside"
    },
    {
        image: 'js/home.jpg',
        text: "I Want To Go Home"
    },
    {
        image: 'js/school.jpg',
        text: "I Want To Go To School"
    },
    {
        image: 'js/grandma.jpg',
        text: "I Want To Go To Grandmas"
    }
]


data.forEach(createBox)

function createBox(item) {
   const box = document.createElement('div')
   box.classList.add('box')
   box.innerHTML = `
        <img src="${item.image}" alt="${item.text}" />
        <p class="info"> ${item.text} </p>
   `

   box.addEventListener('click', () => {
    setTextMessage(text)
    
   })

   main.appendChild(box)
}


// Toggle Text Box
toggleBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.toggle('show')
})

//Close Box
closeBtn.addEventListener('click'. () => {
    document.getElementById('text-box').classList.remove('show')
})

let voices = []

function getVoices() {
    voices = speechSynthesis.getVoices()

    voices.forEach(voice => {
        const option = document.createElement('option')

        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`

        voicesSelect.appendChild(option)
    })
}

// voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices)

getVoices()
