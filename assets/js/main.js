
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let burger = document.querySelector('.burger');
let mobile_menu = document.querySelector('#mobile-menu');
let karz = document.querySelector('.karz');
let karz_menu = document.querySelector('#karz-menu')
let cross = document.querySelector('.krestic')
let cros = document.querySelector('.cros')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

cross.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

karz.addEventListener('click', () => {
  karz.classList.toggle('active');
  karz_menu.classList.toggle('active');
});

cros.addEventListener('click', () => {
  karz.classList.toggle('active');
  karz_menu.classList.toggle('active');
});

const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');
  tabs.forEach((tab, index) => {
    console.log(tab);
    tab.addEventListener('click', () => {
      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })
      tab.classList.add('active');
      contents[index].classList.add('active');
    })
  })
}

toggleContentByTab();