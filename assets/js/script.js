const caraudio = new Audio('./assets/spacebar-click-keyboard-199448.mp3')
document.querySelectorAll('button').forEach(e=>e.addEventListener('click', () => {
    caraudio.play()
}))