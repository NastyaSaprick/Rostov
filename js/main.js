/*
document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll ('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(Element => {
    Element.addEventListener('click', switchModal);
      
  });

  closeBtn.addEventListener('click', switchModal)

});
*/


/*модальное окно */
// модальное окно
$(document).ready(function () {
  var modal = $('.modal'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close'),
  missModal = $('.modal')

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });


  /*сдайдер */
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, 
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

});