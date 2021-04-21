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

  $(document).keyup(function (keyClose) {
    // 27 - keyCode
    if (keyClose.which == 27 && modal.hasClass("modal--visible")) {
        modal.toggleClass('modal--visible');
    }
});

$(document).click(function (keyClose) {
    if ($(keyClose.target).is('.modal')) {
        modal.toggleClass('modal--visible')
    }
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

  new WOW().init();

  //валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // правило - обьект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    messages: {
      userName:{
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Emal",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function(response) {
              alert(' Форма отправлена, мы скоро свяжемся с вами');
              //обнуление формы после отправки
              $(form)[0].reset();
              modal.removClass('modal--visible');
          }
      });
  }
  });

   //валидация формы для блока контроль
   $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      usernName: {
        required: true,
        minlength: 2
      },
      userpPhone: "required",
    }, // сообщения
    messages: {
      userName:{
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен",
    },
    submitHandler: function(form) {
      $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function(response) {
              alert(' Форма отправлена, мы скоро свяжемся с вами');
              //обнуление формы после отправки
              $(form)[0].reset();
              modal.removClass('modal--visible');
          }
      });
  }
  });
//маска для номера

$('[type=tel]').mask('+7(000)-000-00-00', { placeholder: "+7(___)-___-__-__" });

//карта
// The ymaps.ready() function will be called when
    // all the API components are loaded and the DOM tree is generated.
    ymaps.ready(init);
    function init(){ 
        // Creating the map.    
        ymaps.ready(function () {
          var myMap = new ymaps.Map('map', {
                  center: [55.751574, 37.573856],
                  zoom: 9
              }, {
                  searchControlProvider: 'yandex#search'
              }),
      
              // Creating a content layout.
              MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                  '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
              ),
      
              myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                  hintContent: 'Наш офис',
                  balloonContent: 'Моя метка'
              }, {
                  /**
                   * Options.
                   * You must specify this type of layout.
                   */
                  iconLayout: 'default#image',
                  // Custom image for the placemark icon.
                  iconImageHref: 'img/map.svg',
                  // The size of the placemark.
                  iconImageSize: [30, 40],
                  /**
                   * The offset of the upper left corner of the icon relative
                   * to its "tail" (the anchor point).
                   */
                  iconImageOffset: [-5, -38]
              }),
      
              myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                  hintContent: 'A custom placemark icon with contents',
                  balloonContent: 'This one — for Christmas',
                  iconContent: '12'
              }, {
                  /**
                   * Options.
                   * You must specify this type of layout.
                   */
                  iconLayout: 'default#imageWithContent',
                  // Custom image for the placemark icon.
                  iconImageHref: 'images/ball.png',
                  // The size of the placemark.
                  iconImageSize: [48, 48],
                  /**
                   * The offset of the upper left corner of the icon relative
                   * to its "tail" (the anchor point).
                   */
                  iconImageOffset: [-24, -24],
                  // Offset of the layer with content relative to the layer with the image.
                  iconContentOffset: [15, 15],
                  // Content layout.
                  iconContentLayout: MyIconContentLayout
              });
      
          myMap.geoObjects
              .add(myPlacemark)
              .add(myPlacemarkWithContent);
      });
    }
      

});
