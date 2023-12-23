const headerLinks = document.querySelectorAll('.header-link')

headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        for (let i = 0; i < headerLinks.length; i++) {
            if (headerLinks[i].classList.contains('active')) {
                headerLinks[i].classList.remove('active')
            }

            if (!headerLinks[i].classList.contains('active')) {
                link.classList.add('active')
            }
        }

    })
})

// hamburger menu

const hamburgerMenu = document.querySelector('.hamburger-menu')
const mainNavList = document.querySelector('.main-nav-list')
const overlay = document.querySelector('.overlay')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    mainNavList.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active')
    mainNavList.classList.remove('active')
    overlay.classList.remove('active')
})

headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active')
        mainNavList.classList.remove('active')
        overlay.classList.remove('active')
    })
})