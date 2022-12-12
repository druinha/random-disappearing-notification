const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'The greatest pleasure of life is love',
    'Life is short, and it is here to be lived',
    'The longer I live, the more beautiful life becomes',
    'The purpose of our lives is to be happy',
    'Turn your wounds into wisdom',
    'I like criticism. It makes you strong',
    'I’m a smart person, I just do stupid things',
    'Don’t be a slave in heaven. Be a king of hell',
    'I’m the dude with cool attitude',
    'Do not give advice unless you are asked to',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 5000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
