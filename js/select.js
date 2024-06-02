const btn = document.querySelectorAll('.choose__inner-right-btn')
const img = document.querySelector('.choose__inner-cart-info-img')
btn.forEach(btns => {
    btns.addEventListener('click', () => {
        const btnId = btns.getAttribute('data-id')
        btn.forEach(btns => btns.classList.remove('choose-btn'))
        img.classList.remove('img--blue', 'img--green')
        if (btnId == 1) {
            btns.classList.add('choose-btn')
        } else if (btnId == 2) {
            btns.classList.add('choose-btn')
            img.classList.add('img--green')
        } else if (btnId == 3) {
            btns.classList.add('choose-btn')
            img.classList.add('img--blue')
        }
    })
})