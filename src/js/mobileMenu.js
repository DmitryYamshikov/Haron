export function toggleMobileMenu() {
  const burger = document.querySelector('.header__burger')
  const mobileMenu = document.querySelector('.mobile-menu')
  const mobileMenuClose = document.querySelector('.mobile-menu__close')
  const mobileMenuCover = document.querySelector('.mobile-menu__cover')
  const mobileWrapper = document.querySelector('.mobile-menu__wrapper')

  burger.addEventListener('click', openMenu)

  mobileMenuClose.addEventListener('click', closeMenu)

  mobileMenuCover.addEventListener('click', closeMenu)

  function openMenu() {
    mobileMenu.classList.add('mobile-menu--active')
    setTimeout(() => {
      mobileWrapper.classList.add('mobile-menu__wrapper--active')
    }, 1)
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    mobileMenu.classList.remove('mobile-menu--active')
    mobileWrapper.classList.remove('mobile-menu__wrapper--active')
    document.body.removeAttribute('style')
  }
}

