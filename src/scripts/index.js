const menuStateInput = document.querySelector('#menu-state')

menuStateInput?.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.documentElement.classList.add('u-lock-scroll')
  } else {
    document.documentElement.classList.remove('u-lock-scroll')
  }
})

const header = document.querySelector('#header')

if (header) {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY

    if (scroll >= 20) {
      header.classList.add('header__inner--raised')
    } else {
      header.classList.remove('header__inner--raised')
    }
  })
}
