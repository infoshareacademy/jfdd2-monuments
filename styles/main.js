$(document).ready(function () {

  $(function() {
    //caches a jQuery object containing the header element
    var header = $(".przycisk");
    var logo = $(".logo");
    var logoImg = $(".logoImg");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 200) {
        header.removeClass('przycisk').addClass("przyciskDol");
        logo.removeClass('logo').addClass("logoDol");
        logoImg.removeClass('logoImg').addClass("logoImgDol");


      } else {
        header.removeClass("przyciskDol").addClass('przycisk');
        logo.removeClass('logoDol').addClass("logo");
        logoImg.removeClass('logoImgDol').addClass("logoImg");
      }
    });
  });

  function goToByScroll(id) {

    id = id.replace("link", "");
    $('html,body').animate({
        scrollTop: ($("#" + id).offset().top) - 80
      },
      'slow');
  }

  $("#nav > ul > li > a").click(function (e) {
    e.preventDefault();
    goToByScroll($(this).attr("id"));
  });

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