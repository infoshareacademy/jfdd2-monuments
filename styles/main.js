$(document).ready(function () {

  $(function () {

    var przyciski = $(".przycisk");
    var logo = $(".logo");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scrollBottom > pozycjaPowitanie) {
        $(".powitanie").addClass('powitanieWidoczny')
      }
      if (scrollBottom > pozycjaFunkcjonalnosci) {
        $(".funkcjonalnosc").addClass('funkcjonalnoscWidoczny')
      }
      if (scrollBottom > pozycjaFormularz) {
        $(".formularz").addClass('formularzWidoczny')
      }


      if (scroll >= 200) {
        przyciski.removeClass('przycisk').addClass("przyciskDol");
        logo.removeClass('logo').addClass("logoDol");


      } else {
        przyciski.removeClass("przyciskDol").addClass('przycisk');
        logo.removeClass('logoDol').addClass("logo");
      }


    });
  });




  var scrollBottom = $(window).scrollTop() + $(window).height() + 100;
  var pozycjaFunkcjonalnosci = document.getElementById('funkcjonalnosci').offsetTop;
  var pozycjaPowitanie = document.getElementById('powitanie').offsetTop;
  var pozycjaFormularz = document.getElementById('formularz').offsetTop + 100;

  $(function() {

    if ($(window).height() > pozycjaPowitanie) {
      $(".powitanie").addClass('powitanieWidoczny')
    }
    if ($(window).height() > pozycjaFunkcjonalnosci) {
      $(".funkcjonalnosc").addClass('funkcjonalnoscWidoczny')
    }
    if ($(window).height() > pozycjaFormularz) {
      $(".funkcjonalnosc").addClass('formularzWidoczny')
    }

  });

   $(window).scroll(function () {



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



