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

// табы секции "application"

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

// табы секции "FAQ"

const tabControls = document.querySelector('.tabs__list')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e){

  const tabControl = e.target.closest('.tabs__link')

  e.preventDefault()

  if(!tabControl) return
  if(e.target.closest('.tabs__link--focus')) return

  const tabContentID = tabControl.getAttribute('href')
  const tabContent = document.querySelector(tabContentID)
  const focusContent = document.querySelector('.list-content--show')
  const focusControl = document.querySelector('.tabs__link--focus')

  focusContent.classList.remove('list-content--show')
  tabContent.classList.add('list-content--show')

  focusControl.classList.remove('tabs__link--focus')
  tabControl.classList.add('tabs__link--focus')
}

// аккордеон секции "FAQ"

const accordionLists = document.querySelectorAll('.accordion__list')

accordionLists.forEach(el =>{

  el.addEventListener('click', (e) => {
    
    const accordionList = e.currentTarget
    const accordionOpenedItem = accordionList.querySelector('.accordion__item--opened')
    const accordionOpenedContent = accordionList.querySelector('.accordion__item--opened .accordion-list__content')
    
    const accordionControl = e.target.closest('.accordion__item-control')
    if(!accordionControl) return
    e.preventDefault()
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if(accordionOpenedItem && accordionItem != accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion__item--opened')
      accordionOpenedContent.style.maxHeight = null
    }
    accordionItem.classList.toggle('accordion__item--opened')
    
    if(accordionItem.classList.contains('accordion__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  })
})

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

// слайдер соц сетей

const swiper2 = new Swiper('.socials__slider', {
  spaceBetween: 20,
  // slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.socials__next',
    prevEl: '.socials__prev',
  },

  // breakpoints: {
  //   451:{
  //     slidesPerView: 1.3,
  //   },
  //   701:{
  //     slidesPerView: 2,
  //   },
  //   801:{
  //     slidesPerView: 2.3,
  //   },
  //   901:{
  //     slidesPerView: 2.5,
  //   },
  //   1101: {
  //     slidesPerView: 100,
  //   }
  // }
});

})()
