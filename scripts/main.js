$(document).ready(function () {

  $(function () {

    var przyciski = $(".przycisk");
    var logo = $(".logo");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();


      if (scroll >= 200) {
        przyciski.removeClass('przycisk').addClass("przyciskDol");
        logo.removeClass('logo').addClass("logoDol");


      } else {
        przyciski.removeClass("przyciskDol").addClass('przycisk');
        logo.removeClass('logoDol').addClass("logo");
      }


    });
  });
  $(function () {
    var scrollBottom = $(window).scrollTop() + $(window).height() + 100;
    var pozycjaFunkcjonalnosci = document.getElementById('funkcjonalnosci').offsetTop;
    var pozycjaPowitanie = document.getElementById('powitanie').offsetTop;
    var pozycjaFormularz = document.getElementById('formularz').offsetTop + 100;

    $(function () {

      if ($(window).height() > pozycjaPowitanie) {
        $(".powitanie").addClass('powitanieWidoczny')
      }
      if ($(window).height() > pozycjaFunkcjonalnosci) {
        $(".funkcjonalnosci").addClass('funkcjonalnosciWidoczny')
      }
      if ($(window).height() > pozycjaFormularz) {
        $(".formularz").addClass('formularzWidoczny')
      }

    });

    $(window).scroll(function () {
      var scrollBottom = $(window).scrollTop() + $(window).height() + 100;
      var pozycjaFunkcjonalnosci = document.getElementById('funkcjonalnosci').offsetTop;
      var pozycjaPowitanie = document.getElementById('powitanie').offsetTop;
      var pozycjaFormularz = document.getElementById('formularz').offsetTop + 100;

      if (scrollBottom > pozycjaFormularz) {
        $(".formularz").addClass('formularzWidoczny')
      }
      if (scrollBottom > pozycjaFunkcjonalnosci) {
        $(".funkcjonalnosci").addClass('funkcjonalnosciWidoczny')
      }
      if (scrollBottom > pozycjaPowitanie) {
        $(".powitanie").addClass('powitanieWidoczny')
      }


    });

  });


  function goToByScroll(href) {

    $('html,body').animate({
        scrollTop: ($(href).offset().top) - 100
      },'slow'
    )}

  $(".menu a").click(function (e) {
    e.preventDefault();
    goToByScroll($(this).attr('href'));
  });


  $(function () {
    $("#kontakt").submit(function () {

      var valid = 0;
      $(this).find('input[type=email], input[type=tel]').each(function () {
        if ($(this).val() != "") valid += 1;
      });

      if (valid) {
        return true;
      }
      else {
        alert("Przed wysłaniem wypełnij przynajmniej jedno z pól do kontaktu z nami. Dziękujemy!");
        return false;
      }
    });
  });



  function setCookieValue(){
    document.cookie = 'ciasteczka=zgoda';
  }

  function checkCookie(cookieNew) {

    var cookie = document.cookie.split(';').map(function (item) {
      var parts = item.split('=');
      var cookie = {
        name: parts[0],
        value: parts[1]
      };
      return cookie;
    }).find(function (item) {
      if (item.value === 'jan') {
        $('#ciastka').css('display', 'none');
      }
    });
  }

  $(document).ready(function() {
    $('#ciastka').click(function() {
      setCookieValue()
      $(this).hide();
    });
    checkCookie(document.cookie);

  });






});



