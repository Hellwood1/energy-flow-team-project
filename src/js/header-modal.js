
const btnOpenEl = document.querySelector('[data-modal-open]')
const btnCloseEl = document.querySelector('[data-modal-close]')
const mobileModal = document.querySelector('.header__modal')

const modal = () => {
    btnOpenEl.addEventListener('click', () => {
        mobileModal.classList.toggle('none')
    })
    btnCloseEl.addEventListener('click', () => {
        mobileModal.classList.toggle('none')
    })
}

const mobileMenu = () => {
    if (!modal()) {
        return
    }
    return modal()
}

export { mobileMenu }