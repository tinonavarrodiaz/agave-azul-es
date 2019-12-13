export const modal = gallery =>{
  gallery.addEventListener('click',e=>{
    e.preventDefault()
    const target = e.target
    if(target.classList.contains('moreInfo')){
      let parent = target.parentElement
      createModal(parent.dataset)
    }
  })
}

const createModal = data =>{
  const modal = document.createElement('div')
  modal.className='tequila-modal'
  modal.id="tequila-modal"
  if (data.namemodal==='La Tarea') {
    modal.innerHTML = `
      <div class="tequila-modal__content">
          <img src="img/brand-left.png" class="brand brand__left" alt="">
          <img src="img/band-right.png" class="brand brand__right" alt="">
          <div class="tequila-modal__product">
              <div class="tequila-modal__img"><img src="img/bottles/new/${data.img}" alt=""></div>
              <div class="tequila-modal__data">
                  <button class="icon-close close-modal">X</button>
                  <h2>${data.namemodal}</h2>
                  <h2>${data.namemodal1}</h2>
                  <p>${data.description}</p>
                  <p><span>Color:</span> ${data.color}</p>
                  <p><span>Aroma:</span> ${data.aroma}</p>
                  <p><span>Cuerpo:</span> ${data.cuerpo}</p>
                  <p><span>Sabor:</span> ${data.sabor}</p>
                  <p><span>Taninos:</span> ${data.taninos}</p>
                  <p>${data.alc} Alc. Vol.</p>
                  <p class="fichaTecnica"><a href="assets/pdf/${data.pdf}" target="_blank">Ficha Técnica</a></p>
                  <ul class="tequila-modal__social-network">
                      <li><a href="${data.facebook}" target="_blank"><img src="img/facebook.svg" alt=""></a></li>
                      <li><a href="${data.instagram}" target="_blank"><img src="img/instagram.svg" alt=""></a></li>
                  </ul>
                  <a href="http://${data.url}" target=_blank">${data.url}</a>
              </div>
          </div>
      </div>
    `
  }else{
    modal.innerHTML = `
      <div class="tequila-modal__content">
          <img src="img/brand-left.png" class="brand brand__left" alt="">
          <img src="img/band-right.png" class="brand brand__right" alt="">
          <div class="tequila-modal__product">
              <div class="tequila-modal__img"><img src="img/bottles/new/${data.img}" alt=""></div>
              <div class="tequila-modal__data">
                  <button class="icon-close close-modal">X</button>
                  <h2>${data.namemodal}</h2>
                  <h2>${data.namemodal1}</h2>
                  <p>${data.description}</p>
                  <p><span>Color:</span> ${data.color}</p>
                  <p><span>Aroma:</span> ${data.aroma}</p>
                  <p><span>Cuerpo:</span> ${data.cuerpo}</p>
                  <p><span>Sabor:</span> ${data.sabor}</p>
                  <p><span>Taninos:</span> ${data.taninos}</p>
                  <p>${data.alc} Alc. Vol.</p>            
                  <p class="fichaTecnica"><a href="assets/pdf/${data.pdf}" target="_blank">Ficha Técnica</a></p>    
              </div>
          </div>
      </div>
    `
  }
  const arrowDown = document.createElement('div')
  arrowDown.className="arrowDownModal"
  arrowDown.id="arrowDownModal"
  arrowDown.innerHTML=`<img src="img/arrowDown.svg" alt="">`
  document.body.appendChild(modal)
  document.body.appendChild(arrowDown)
  const modalClose = modal.querySelector('.close-modal')
  modalClose.addEventListener('click', e=>{
    modal.remove()
    arrowDown.remove()
  })
}
