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
  

});
