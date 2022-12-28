const button = document.getElementById('button')

const changeDOM = ({id, advice}) => {
    const adviceText = document.getElementById('adviceText')
    const adviceId = document.getElementById('adviceId')

    adviceText.innerText = '"' + advice + '"'
    adviceId.innerText = id
}

const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => res.json())
        .then(({slip}) => changeDOM(slip))
}

fetchAdvice()

button.addEventListener('click', () => fetchAdvice())