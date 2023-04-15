//carousel
const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')
const totall = [10]
let slideIndex = 0

showSlides(slideIndex)
function showSlides(n) {
      
    if(slides.length < 9 ) {
        total.innerHTML = "0" + slides.length
    }  else {
        total.innerHTML = slides.length
    }
    
    
    if(slideIndex > slides.length - 1) {
        slideIndex = 0
    } 
    if(slideIndex < 0) {
        slideIndex = slides.length - 1
    }

  
    current.innerHTML = slideIndex + 1
    
    slides.forEach(el => el.style.display = "none")
    
    slides[slideIndex].style.display = "block"
    slides[slideIndex].classList.add('fade')
}


offer__slider_next.onclick = () => {
    slideIndex++

    showSlides(slideIndex)
}
offer__slider_prev.onclick = () => {
    slideIndex--

    showSlides(slideIndex)
}

// modal
let modal = document.querySelector('.modal')
let buttons = document.querySelectorAll('.btn')
let modal__close = document.querySelector('.modal__close')
buttons.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show')
    }
})

modal__close.onclick = () => {
    modal.classList.remove('show')
}
//food 
let tabcontents = document.querySelectorAll(".tabcontent")
let tabheader__items = document.querySelectorAll(".tabheader__item")
let tabcontent__descrs = document.querySelectorAll(".tabcontent__descr")

tabcontents.forEach((img) => {
    
    
    // tabcontents[slideIndex].style.display = "block"
})
