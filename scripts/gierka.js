$(document).ready(function(){

  var $table = $('<table>');
$('#app').append($table);
for (var y = 0; y < 15; y++) {
  var $tr = $('<tr>');
  $table.append($tr);
  for (var x = 0; x <30; x++) {
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
     for(var i=0;i<howManyItems;i++) {
       var $cells = $('td',$table).not(types.map(function (type) {
         return '.' + type.name;
       }).join(', '));
       var howMany = $cells.length-1;
       var randomFloat = Math.random() * howMany;
       var randomInt = Math.round(randomFloat) % howMany+1;
       $cells.eq(randomInt).addClass(what);
     }
   }

   //drawSomething(20, 'monument');
   //drawSomething(5, 'food');
   //for(var i=0;i<20;i++) {
   //  var $cells = $('td:not(.zabytek)',$table);
   //  var howMany = $cells.length-1;
   //  var randomFloat = Math.random() * howMany;
   //  var randomInt = Math.round(randomFloat) % howMany+1;
   //  $cells.eq(randomInt).addClass('zabytek');
   //}
   //for(var i=0;i<5;i++) {
   //  var $cells = $('td:not(.food, .zabytek)', $table);
   //  var howMany = $cells.length - 1;
   //  var randomFloat = Math.random() * howMany;
   //  var randomInt = Math.round(randomFloat) % howMany + 1;
   //  $cells.eq(randomInt).addClass('food');
   //}
 }
  $('td').eq(0).addClass('player');
  losowanie();


  $(document).keypress(function(event){
    var actualPosition =  $('.player')
    var newPosition;
    //console.log(event.which);
    if (event.which == 100)  {
      newPosition = $('.player').next();
    }
    if (event.which == 97) {
      newPosition = $('.player').prev();
    }
    if (event.which == 115) {
      var playerIndex = $('.player').index() +1 ;
      newPosition = $('.player').parent().next().find(':nth-child(' + playerIndex + ')');
    }
    if (event.which == 119) {
      var playerIndex = $('.player').index() +1 ;
      newPosition = $('.player').parent().prev().find(':nth-child(' + playerIndex + ')');
    }

        if(!newPosition.hasClass('route')) {
          actualPosition.removeClass('player').addClass('route');
          newPosition.addClass('player').removeClass('route').removeClass('monument').removeClass('food');

        }
    if (!newPosition.hasClass('cell')) {
      alert ('');
    }


    //Funkcja liczaca złapane zabytki
    var foods = $('.food');
    console.log('Ilosc jedzenia' + foods.length);
    var iloscZabytkow = $('.monument').length;
    console.log('Ilosc zabytkow'+ iloscZabytkow);
    var points = 20-iloscZabytkow;
    console.log(points);
    var pokonanaDroga =  $('.route').length-(5-foods.length)*5;
    $("#wynik").html  (points);
    $("#iloscRuchu").html (20-pokonanaDroga);

        if (pokonanaDroga > 20) {
              alert('ssss');
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
function moveHooligan(){
  var newPosition;
  var direction = Math.random();
  if (direction <=0.24) {
    newPosition = $('.hooligan').next();
  }
  else if (direction>0.24 && direction<0.49 ){
    newPosition = $('.hooligan').prev();
  }
  else if (direction >0.5 && direction < 0.75){
    var hooliganIndex = $('.hooligan').index() +1 ;
    newPosition = $('.hooligan').parent().next().find(':nth-child(' + hooliganIndex + ')');
  }
  else {
    var hooliganIndex = $('.hooligan').index() +1 ;
    newPosition = $('.hooligan').parent().prev().find(':nth-child(' + hooliganIndex + ')');
  }
  return newPosition;
}
var prevPosition = $();
var hooligan = setInterval(function(){

  var actualPosition =  $('.hooligan');
  var newPosition; // = moveHooligan();

  do {
    newPosition = moveHooligan();
    //if (! newPosition.hasClass('cell') )
    //  debugger;

  } while ( !newPosition.hasClass('cell'));
  actualPosition.removeClass('hooligan');
  newPosition.addClass('hooligan').removeClass('food');


},200);








