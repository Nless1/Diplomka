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

platformsList.addEventListener('click', toggleButton)

function toggleButton(e){

  const tabButton = e.target.closest('.platforms-link')
  const tabItem = tabButton.parentElement.classList
  const downloadButton = document.querySelector('.application__download-button')
  
  if(!tabButton) return
  e.preventDefault()
  if(e.target.closest('.platforms-link--focus')) return
  
  switch(true) {
    case tabItem.contains("android-item"):
      downloadButton.classList.add('modal-1');
      downloadButton.classList.remove('modal-2');
      downloadButton.classList.remove('modal-3');
      downloadButton.classList.remove('modal-4');
      break;
    case tabItem.contains("apple-item"):
      downloadButton.classList.add('modal-2');
      downloadButton.classList.remove('modal-1');
      downloadButton.classList.remove('modal-3');
      downloadButton.classList.remove('modal-4');
      break;
    case tabItem.contains("linux-item"):
      downloadButton.classList.add('modal-3');
      downloadButton.classList.remove('modal-2');
      downloadButton.classList.remove('modal-1');
      downloadButton.classList.remove('modal-4');
      break;
    case tabItem.contains("windows-item"):
      downloadButton.classList.add('modal-4');
      downloadButton.classList.remove('modal-2');
      downloadButton.classList.remove('modal-3');
      downloadButton.classList.remove('modal-1');
      break;
  }

  const tabContentID = tabButton.getAttribute('href')

  document.querySelector('.button-icon--show').classList.remove('button-icon--show')
  document.querySelector(tabContentID).classList.add('button-icon--show')

  document.querySelector('.platforms-link--focus').classList.remove('platforms-link--focus')
  tabButton.classList.add('platforms-link--focus')
}

// модальные окна секции "application"

const appButton = document.querySelector('.application__download-button')

appButton.addEventListener('click', openModal)

function openModal(e){
  
  if(!appButton) return
  e.preventDefault()
  
  switch(true){
    case appButton.classList.contains('modal-1'): document.body.classList.add('body--opened-modal-1'); break;
    case appButton.classList.contains('modal-2'): document.body.classList.add('body--opened-modal-2'); break;
    case appButton.classList.contains('modal-3'): document.body.classList.add('body--opened-modal-3'); break;
    case appButton.classList.contains('modal-4'): document.body.classList.add('body--opened-modal-4'); break;
  }
}
const modal = document.querySelectorAll('.modal')

modal.forEach(el =>{
  el.addEventListener('click', (e) => {

    e.preventDefault()

  modal1Close(e);
  modal2Close(e);
  modal3Close(e);
  modal4Close(e);
});

function modal1Close(e){ 
  if(e.target.closest('.modal__close') || e.target.classList.contains('modal')){ 
    document.body.classList.remove('body--opened-modal-1') 
  } 
} 

function modal2Close(e){ 
  if(e.target.closest('.modal__close') || e.target.classList.contains('modal')){ 
    document.body.classList.remove('body--opened-modal-2') 
  } 
} 

function modal3Close(e){ 
  if(e.target.closest('.modal__close') || e.target.classList.contains('modal')){ 
    document.body.classList.remove('body--opened-modal-3') 
  } 
} 

function modal4Close(e){ 
  if(e.target.closest('.modal__close') || e.target.classList.contains('modal')){ 
    document.body.classList.remove('body--opened-modal-4') 
  } 
}
})



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

// слайдер этапов установки

var swiper2 = new Swiper(".installation__swiper", {
  effect: "cards",
  grabCursor: true,
  speed: 500,
  rotate: true,
  mousewheel: {
  invert: false,
},
});

// слайдер соц сетей

const swiper3 = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  swipe: false,

  navigation: {
    nextEl: '.socials__next',
    prevEl: '.socials__prev',
  },

  breakpoints: {
    401:{
      slidesPerView: 4,
    },
    501:{
      slidesPerView: 5,
    },
    701:{
      slidesPerView: 6,
    },
    1101:{
      slidesPerView: 7,
    }
  }
});

// ховер-аккордеон в футере

const footerCol = document.querySelectorAll('.footer__col');

footerCol.forEach(el =>{
  
  if(el.classList.contains('footer__col-1')) return
  
  el.addEventListener('mouseenter', function() {
    this.classList.add('footer__col-active');
    el.style.maxHeight = el.scrollHeight + 'px';
  });
  el.addEventListener('mouseleave', function() {
    this.classList.remove('footer__col-active');
    el.style.maxHeight = null
  });
})
})()
