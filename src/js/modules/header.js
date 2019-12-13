export const slogan = header =>{
  const slogan = header.querySelector('.slogan ')
  const newSlogan = slogan.cloneNode(true)
  slogan.remove()
  newSlogan.classList.add('slogan-mobile')
  newSlogan.classList.remove('slogan')
  header.insertAdjacentElement('afterbegin', newSlogan)
}

export const menuToggle = (nav,toggle) =>{
  toggle.addEventListener('click', function (e) {
    e.preventDefault()
    nav.classList.toggle('show')
  })
}
