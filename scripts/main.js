$(document).ready(function () {

  $('.przycisk4').click(function () {
    window.location('http://monuments.jfdd2.infoshareaca.nazwa.pl/app/');
  });

  var lang = localStorage.getItem('language');
  if (lang === null) {
    localStorage.setItem('language', 'pl');
  }
  loadLang();

  function loadLang() {
    lang = localStorage.getItem('language');
    $('.polish').toggle(lang === 'pl');
    $('.english').toggle(lang === 'en');
  }

  $('#language').click(function () {
    localStorage.setItem('language', lang === 'pl' ? 'en' : 'pl');
    loadLang();
  });

  $(function () {

    var przyciski = $(".przycisk");
    var przycisk4 = $(".przycisk4");
    var logo = $(".logo");
    var langToggle = $('.langToggle')
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        przyciski.removeClass('przycisk').addClass("przyciskDol");
        przycisk4.removeClass('przycisk4').addClass("przycisk4Dol");
        logo.removeClass('logo').addClass("logoDol");
        langToggle.removeClass('langToggle').addClass('langToggleDol')
      }
      else {
        przyciski.removeClass("przyciskDol").addClass('przycisk');
        przycisk4.removeClass("przycisk4Dol").addClass('przycisk4');
        logo.removeClass('logoDol').addClass("logo");
        langToggle.removeClass('langToggleDol').addClass('langToggle')
      }

    });
    $(function () {
      var przycisk1 = $('.przycisk1');
      var przycisk2 = $('.przycisk2');
      var przycisk3 = $('.przycisk3');
      var logo = $('.logo');
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var scrollHeight = $(window).scrollTop() + $(window).height();
        var pozycjaFunkcjonalnosci = $('.sekcjaFunkcjonalnosci').offset().top - 300;
        var bottomFunkcjonalnosci = +pozycjaFunkcjonalnosci + $('.sekcjaFunkcjonalnosci').height() + 500;
        var pozycjaONas = $('.oNas').offset().top + 100;
        var bottomONas = pozycjaONas + $('.oNas').height();
        var pozycjaKontakt = $('.formularz').offset().top + 100;

        if (scroll >= pozycjaFunkcjonalnosci && scrollHeight <= bottomFunkcjonalnosci) {
          przycisk1.removeClass('przyciskDol').addClass('przyciskX');
        } else {
          przycisk1.removeClass('przyciskX').addClass('przycisk');
        }
        if (scrollHeight >= pozycjaONas && scrollHeight < bottomONas) {
          przycisk2.removeClass('przyciskDol').addClass('przyciskX')
        } else {
          przycisk2.removeClass('przyciskX').addClass('przycisk')
        }
        if (scrollHeight > pozycjaKontakt) {
          przycisk3.removeClass('przyciskDol').addClass('przyciskX')
        } else {
          przycisk3.removeClass('przyciskX').addClass('przycisk')
        }
      });
    });
  });

  $(function () {

    $(window).on('load scroll', function () {
      var scrollBottom = $(window).scrollTop() + $(window).height() + 100;
      var pozycjaSekcjaFunkcjonalnosci = $('.sekcjaFunkcjonalnosci').offset().top;
      var pozycjaPowitanie = $('#powitanie').offset().top;
      var pozycjaFormularz = $('#formularz').offset().top + 100;

      if (scrollBottom > pozycjaFormularz) {
        $(".formularz").addClass('formularzWidoczny')
      }
      if (scrollBottom > pozycjaSekcjaFunkcjonalnosci) {
        $(".sekcjaFunkcjonalnosci").addClass('sekcjaFunkcjonalnosciWidoczny')
      }
      if (scrollBottom > pozycjaPowitanie) {
        $(".powitanie").addClass('powitanieWidoczny')
      }
    });
  });

  function goToByScroll(href) {
    $('html,body').animate({
        scrollTop: ($(href).offset().top) - 100
      }, 'slow'
    )
  }

  $(".menu a:not(.langToggle)").click(function (e) {
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

  function setCookieValue(name, value) {
    document.cookie = name + '=' + value;
  }

  checkCookie(document.cookie);
  $('#ciasteczka').click(function () {
    setCookieValue('politykaCiasteczek', 'zgoda');
    $('#ciasteczka').hide();
  });

  function checkCookie() {
    if (document.cookie != "") {
      var cookies = document.cookie.split(';');
      for (i = 0; i < cookies.length; i++) {
        var name = cookies[i].split('=')[0];
        var value = cookies[i].split('=')[1];
        if (name === 'politykaCiasteczek') {
          if (value === 'zgoda') {
            $('#ciasteczka').hide()
          }
        }
      }
    }
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var pozycjaoNas = $('.oNas').offset().top;
    var przesuniecie = 400 + (scroll - pozycjaoNas) * 0.3;
    if (przesuniecie > 0) {
      $('.oNas').css('background-position', 'center ' + przesuniecie + 'px')
    }
  });
});