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
  mousewheel: {
    invert: true
  },
  keyboard: true,
  autoplay: {
    delay: 8000
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//scrollReveal - Mostra elemento quando der scroll na pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 300,
  reset: false
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonial,
  #contact .text, #contact .button, #contact .links
  footer .brand, footer .social
  
  `,
  {
    interval: 100
  }
)

//rolagem ao top

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY > +560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/* Menu Ativo conforme a seção visível na página*/

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})

/*const section = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAtribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart = checkpoint) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      classList.remove('active')
    }
  }
*/
