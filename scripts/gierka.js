var endGame = 0;
var scenario = "";
$(document).ready(function () {

  var $table = $('<table>');
  $('#app').append($table);
  for (var y = 0; y < 15; y++) {
    var $tr = $('<tr>');
    $table.append($tr);
    for (var x = 0; x < 30; x++) {
      var $td = $('<td>');
      $td.addClass('cell');
      $tr.append($td);
    }
  }


  function losowanie() {
    var types = [
      {
        name: 'monument',
        quantity: 20
      },
      {
        name: 'food',
        quantity: 5
      },
      {
        name: 'hooligan',
        quantity: 1
      }

    ];


    types.forEach(function (type) {
      drawSomething(type.quantity, type.name);
    });

    function drawSomething(howManyItems, what) {
      for (var i = 0; i < howManyItems; i++) {
        var $cells = $('td', $table).not(types.map(function (type) {
          return '.' + type.name;
        }).join(', '));
        var howMany = $cells.length - 1;
        var randomFloat = Math.random() * howMany;
        var randomInt = Math.round(randomFloat) % howMany + 1;
        $cells.eq(randomInt).addClass(what);
      }
    }
  }

  $('td').eq(0).addClass('player');
  losowanie();


  $(document).keypress(function (event) {
    var actualPosition = $('.player')
    var newPosition;
    console.log(event.which);
    if (event.which == 100 || event.which == 68) {
      newPosition = $('.player').next();
    }
    if (event.which == 97 || event.which == 65) {
      newPosition = $('.player').prev();
    }
    if (event.which == 115 || event.which == 83) {
      var playerIndex = $('.player').index() + 1;
      newPosition = $('.player').parent().next().find(':nth-child(' + playerIndex + ')');
    }
    if (event.which == 119 || event.which == 87) {
      var playerIndex = $('.player').index() + 1;
      newPosition = $('.player').parent().prev().find(':nth-child(' + playerIndex + ')');
    }

    if (!newPosition.hasClass('route') && endGame === 0) {
      actualPosition.removeClass('player').addClass('route');
      newPosition.addClass('player').removeClass('route').removeClass('monument').removeClass('food');

    }
    if (!newPosition.hasClass('cell')) {
      scenario = 'Wpadłeś do Motławy!';
      gameOver(scenario);
      endGame = 1

    }


    //Funkcja liczaca złapane zabytki
    var foods = $('.food');
    console.log('Ilosc jedzenia' + foods.length);
    var iloscZabytkow = $('.monument').length;
    console.log('Ilosc zabytkow' + iloscZabytkow);
    var points = 20 - iloscZabytkow;
    console.log(points);
    var pokonanaDroga = $('.route').length - (5 - foods.length) * 5;
    $(".wynik").html  (points);
    $("#iloscRuchu").html (41 - pokonanaDroga);

    if (pokonanaDroga > 40) {
      scenario = 'Zmęczenie nie pozwala Ci na dalsze zwiedzanie. ';
      gameOver(scenario);
      endGame = 1;
    }
    //Nie powtarzająca się droga


//function pokazWynik (){
//  $('.iloscZabytkow').innerHTML='Ilosc zabytkow' + iloscZabytkow;
//}


    //var playerIndex = $('.player').index();
    //console.log(playerIndex)
    //var playerParentIndex = $('.player').parent().index();
    //console.log(($('.player').parent()))
  });
});

function moveHooligan() {
  var newPosition;
  var direction = Math.random();
  if (direction <= 0.24) {
    newPosition = $('.hooligan').next();
  }
  else if (direction > 0.24 && direction < 0.49) {
    newPosition = $('.hooligan').prev();
  }
  else if (direction > 0.5 && direction < 0.75) {
    var hooliganIndex = $('.hooligan').index() + 1;
    newPosition = $('.hooligan').parent().next().find(':nth-child(' + hooliganIndex + ')');
  }
  else {
    var hooliganIndex = $('.hooligan').index() + 1;
    newPosition = $('.hooligan').parent().prev().find(':nth-child(' + hooliganIndex + ')');
  }
  return newPosition;
}
var prevPositions;
var hooligan = setInterval(function () {

  var actualPosition = $('.hooligan');
  var newPosition;

  do {
    newPosition = moveHooligan();

  } while (!newPosition.hasClass('cell') || newPosition.hasClass('prevPosition'));
  if (prevPositions != undefined) {
    prevPositions.removeClass('prevPosition');
  }
  prevPositions = actualPosition.addClass('prevPosition');
  actualPosition.removeClass('hooligan');
  if (newPosition.hasClass('player')) {
    scenario = 'Mialeś nieprzyjemne spotkanie z chuliganem!';
    gameOver(scenario);
    endGame = 1;
  }
  newPosition.addClass('hooligan').removeClass('food');


}, 200);

function gameOver(scenario) {
  $('.gameOver').css('display', 'block');
  $('.reasonOfEnd').html (scenario + '<br>' +
    '')


}
