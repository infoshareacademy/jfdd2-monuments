$(document).ready(function () {

  $(function switchLanguage() {
    $("#language").click(function(){
      $(".english").toggle();
    });
  });

  //$(function switchLanguage() {
  // $("#language").click(function () {
  //   $(".english").hide();
  //   $(".polish").show();
  // });
  //});

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
        var scroll = $(window).scrollTop() + $(window).height() - 300 ;
        var pozycjaFunkcjonalnosci = $('.sekcjaFunkcjonalnosci').offset().top;
        var bottomFunkcjonalnosci = pozycjaFunkcjonalnosci + $('.sekcjaFunkcjonalnosci').height();
        var pozycjaONas = $('.oNas').offset().top;
        var bottomONas = pozycjaONas + $('.oNas').height() -200;
        var pozycjaKontakt = $('.formularz').offset().top -200;



        if (scroll >=pozycjaFunkcjonalnosci && scroll <=bottomFunkcjonalnosci) {
          przycisk1.removeClass('przyciskDol').addClass('przyciskX');
        }else {
          przycisk1.removeClass('przyciskX').addClass('przycisk');
        }
        if(scroll >= pozycjaONas && scroll <bottomONas) {
          przycisk2.removeClass('przyciskDol').addClass('przyciskX')
        }else {
          przycisk2.removeClass('przyciskX').addClass('przycisk')
        }
        if(scroll>pozycjaKontakt) {
          przycisk3.removeClass('przyciskDol').addClass('przyciskX')
        }else {
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



  function setCookieValue(name, value){
    document.cookie = name + '=' + value ;
  }

  checkCookie(document.cookie);

  $('#ciasteczka').click(function(){
    setCookieValue('politykaCiasteczek', 'zgoda');
    $('#ciasteczka').hide();

  });

  function checkCookie(){
    if (document.cookie != "") {
      var cookies = document.cookie.split(';');
      for ( i=0; i<cookies.length; i++ ) {
        var name = cookies[i].split('=')[0];
        var value = cookies[i].split('=')[1];
        if (name === 'politykaCiasteczek'){
          if (value === 'zgoda'){
            $('#ciasteczka').hide()
          }}}}}

  $(window).scroll(function (){
    var scroll = $(window).scrollTop() + $(window).height();
    var pozycjaoNas = $('.oNas').offset().top;
    var przesuniecie = 400 + (scroll - pozycjaoNas) * 0.3;
    if (przesuniecie > 0) {
      $('.oNas').css('background-position', 'center ' + przesuniecie + 'px')

    }
  });





});
