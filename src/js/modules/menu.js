const footerText = `<p>Copyright © Destiladora Agave Azul, Ltd. All Rights Reserved.</p>`
const footerUl = `<ul class="social-network">
          <li><a href="#" target="_blank">Instagram</a></li>
          <li><a href="#" target="_blank">Facebook</a></li>
        </ul>`
export const menuAction = (header,sections,footer, isMobile) => {
  const links = [...header.querySelectorAll('a')]
  links.map(link=>{
    link.addEventListener('click', function (e) {
      e.preventDefault()
      header.querySelector('.main-nav').classList.remove('show')
      let cName = this.hash.replace('#','')
      links.map(l=>l.classList.remove('selected'))

      this.classList.add('selected')
      let index = links.indexOf(this)
      showSection(cName, index, sections,footer, isMobile)
    })
  })
}

const showSection = (cname,index,sections,footer, isMobile) =>{
  const modal = document.getElementById('tequila-modal')
  const arrowDownModal = document.getElementById('arrowDownModal')
  if (modal) modal.remove()
  if (arrowDownModal) arrowDownModal.remove()
  const textR = footer.querySelector('#footer-right')
  const layer = document.getElementById('layer-back')
  const logo = document.querySelector('.main-logo')
  layer.className=''
  layer.classList.add(cname)
  footer.className="main-footer"
  footer.classList.add(`f-${cname}`)
  sections.map(el=>el.classList.remove('active'))
  sections[index].classList.add('active')
  index===0 ? document.documentElement.style.setProperty('--color-header', 'var(--color-header-light)') : document.documentElement.style.setProperty('--color-header', 'var(--color-header-dark)')
  if (index===0){
    textR.innerHTML=footerUl
  }
  if(index===1 || index===2 ){
    textR.innerHTML=''
  }
  if(index===3 || index===4){
    textR.innerHTML=footerText
  }
  if (index===2) desSlider(cname)

  if(index===3){
    logo.src='img/logo-alt.svg'
  }else{
    logo.src='img/logo.svg'
  }
  if(isMobile && index!==0){
    logo.src='img/logo-alt.svg'
  }

}


const desSlider = (cname)=>{
  const destilaria = document.getElementById('bannerSlider')
  const images = [...destilaria.querySelectorAll('img')]
  console.log(destilaria,images)
  setInterval(()=>{
    let index = images.indexOf(destilaria.querySelector('.active'))
    console.log(index)
    images.map(img=>img.classList.remove('active'))
    if (index===images.length-1){
      images[0].classList.add('active')
    }else{
      images[index+1].classList.add('active')
    }
  },5000)
}
