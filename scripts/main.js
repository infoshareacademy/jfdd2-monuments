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
    $(function (){
      var przycisk1 = $('.przycisk1');
      var przycisk2 = $('.przycisk2');
      var przycisk3 = $('.przycisk3');
      var logo = $('.logo');
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll >=350 && scroll <=800) {
          przycisk1.removeClass('przyciskDol').addClass('przyciskX');
        }else {
          przycisk1.removeClass('przyciskX').addClass('przycisk');
        }
        if(scroll >= 850 && scroll <1280) {
          przycisk2.removeClass('przyciskDol').addClass('przyciskX')
        }else {
          przycisk2.removeClass('przyciskX').addClass('przycisk')
        }
        if(scroll>1250) {
          przycisk3.removeClass('przyciskDol').addClass('przyciskX')
        }else {
          przycisk3.removeClass('przyciskX').addClass('przycisk')
        }
      });

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


  function goToByScroll(id) {

    id = id.replace("link", "");
    $('html,body').animate({
        scrollTop: ($("#" + id).offset().top) - 100
      },
      'slow');
  }

  $("#nav > ul > li > a").click(function (e) {
    e.preventDefault();
    goToByScroll($(this).attr("id"));
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
});



