const headerMenuBtn = document.querySelector('.header__menu-m');
const headerMenuBtnStick = document.querySelectorAll('.header__menu-m > span');
const headerModal = document.querySelector('.header__modal');
const ACTIVE = 'active';

headerMenuBtn.addEventListener('click', () => {
    headerMenuBtnStick.forEach(item => {
        item.classList.toggle(ACTIVE)
    })
    headerModal.classList.toggle(ACTIVE)
})