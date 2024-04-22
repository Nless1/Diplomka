(function() {

// бургер-меню

document.addEventListener('click', burgerInit)
function burgerInit(e){
    document.addEventListener('keydown', burgerClose)
    const burgerButton = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.header__link')
    
    if(!burgerButton && !burgerNavLink) return
    if(document.documentElement.clientWidth > 1000) return
    
    e.preventDefault()

    document.body.classList.toggle('body--opened-menu')
    function burgerClose(e){
      if(document.body.classList.contains('body--opened-menu') && e.code === 'Escape'){
      document.body.classList.remove('body--opened-menu')
      }
    }
  }

// табы

const platformsList = document.querySelector('.platforms-list')

platformsList.addEventListener('click', toggleIcon)

function toggleIcon(e){

  const tabIcon = e.target.closest('.platforms-link')
  
  if(!tabIcon) return
  e.preventDefault()
  if(e.target.closest('.platforms-link--focus')) return
  
  const tabContentID = tabIcon.getAttribute('href')

  document.querySelector('.button-icon--show').classList.remove('button-icon--show')
  document.querySelector(tabContentID).classList.add('button-icon--show')

  document.querySelector('.platforms-link--focus').classList.remove('platforms-link--focus')
  tabIcon.classList.add('platforms-link--focus')
}

// слайдер о компании

const swiper = new Swiper('.about__slider', {
  spaceBetween: 24,
  slidesPerView: 1,
  initialSlide: 1,

  navigation: {
    nextEl: '.about__next',
    prevEl: '.about__prev',
  },

  breakpoints: {
    451:{
      slidesPerView: 1.3,
    },
    701:{
      slidesPerView: 2,
    },
    801:{
      slidesPerView: 2.3,
    },
    901:{
      slidesPerView: 2.5,
    },
    1101: {
      slidesPerView: 3,
    }
  }
});

})()
