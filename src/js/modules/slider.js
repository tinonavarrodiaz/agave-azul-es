const  slidesImg = ['Landscape-m','AgaveAzul-m','AgaveAzul1-m','Inicio3-m','Inicio4-m']
export const imgSlider = (slider, isMobile)=>{
  if (isMobile){
    const images = [...slider.querySelectorAll('img')]
    images.forEach((img, i)=>{
      img.src=`img/${slidesImg[i]}.jpg`
    })
  }
}

export const slider = (sliderEle,time)=>{
  const slides = [...sliderEle.querySelectorAll('.slide')]
  setInterval(()=>{
    const slidesActive = sliderEle.querySelector('.active')
    let activeIndex = slides.indexOf(slidesActive)
    slides.map(el=>el.classList.remove('active'))
    if (activeIndex===slides.length-1){
      slides[0].classList.add('active')
    }else{
      slides[activeIndex+1].classList.add('active')
    }
    // console.log(activeIndex)
    // console.log(slides.length)
    // if (activeIndex===slides.length-1){
    //   slides[0].classList.add('active')
    // }else{
    //   slides[activeIndex+1].classList.add('.active')
    // }
  },time)
}

export const sliderTequilas = (gallery, isMobile) =>{
  const prev = gallery.querySelector('#prev')
  const next = gallery.querySelector('#next')
  const items =  [...gallery.querySelectorAll('.gallery__item')]
  const itemsTotal = items.length
  const dd = document.documentElement
  const widthItem = items[0].clientWidth
  const maxPos = isMobile? widthItem * 7 : widthItem * 3
  // console.log(widthItem, maxPos)
  next.addEventListener('click', e=>{
    let pos = parseInt(getComputedStyle(dd).getPropertyValue('--tequilasSliderPos'))
    e.preventDefault()
    if (pos>maxPos*-1 ){
      dd.style.setProperty('--tequilasSliderPos', `${pos-widthItem}px`)
      prev.classList.add('show')
      if(pos===(maxPos-widthItem) * -1){
        next.classList.remove('show')
      }
    }
  })
  prev.addEventListener('click',e=>{
    let pos = parseInt(getComputedStyle(dd).getPropertyValue('--tequilasSliderPos'))
    e.preventDefault()
    if (pos<0 ){
      console.log(pos)
      dd.style.setProperty('--tequilasSliderPos', `${pos+widthItem}px`)
      next.classList.add('show')
      if(pos===0-widthItem){
        prev.classList.remove('show')
      }
    }
  })
}
