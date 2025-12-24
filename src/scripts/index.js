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

// Theme toggle
const themeToggle = document.querySelector('#theme-toggle')
const html = document.documentElement

// Check for saved preference or system preference
const savedTheme = localStorage.getItem('theme')
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// Set initial theme
if (savedTheme === 'light') {
  html.setAttribute('data-theme', 'light')
} else if (savedTheme === 'dark') {
  html.removeAttribute('data-theme')
} else if (!systemPrefersDark) {
  html.setAttribute('data-theme', 'light')
}

themeToggle?.addEventListener('click', () => {
  const isLight = html.getAttribute('data-theme') === 'light'

  if (isLight) {
    // Switch to dark
    html.removeAttribute('data-theme')
    localStorage.setItem('theme', 'dark')
  } else {
    // Switch to light
    html.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
})
