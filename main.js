//abre e fecha o menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um intem do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da pagina quando der scrol
const header = document.querySelector('#header') //procura o seletor header
const navHeight = header.offsetHeight //header.offsetheight -> descolocamento da altura

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //maior que a altura do scroll
    header.classList.add('scroll') //add ao header a classe scroll
  } else {
    //menor que a altura do header
    header.classList.remove('scroll') //remove ao header a classe scroll
  }
})

//Testimonials carousel slider swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

//scrollReveal - Mostra elemento quando der scroll na pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonial,
  #contact .text, #contact .button, #contact .links
  
  `,
  {
    interval: 100
  }
)
