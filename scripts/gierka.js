$(document).ready(function(){

  var $table = $('<table>');
$('#app').append($table);
for (var y = 0; y < 20; y++) {
  var $tr = $('<tr>');
  $table.append($tr);
  for (var x = 0; x <20; x++) {
    var $td = $('<td>');
    $td.addClass('cell');
    $tr.append($td);
  }
}


 function losowanie() {


   for(var i=0;i<20;i++) {
     var $cells = $('td:not(.zabytek)',$table);
     var howMany = $cells.length-1;
     var randomFloat = Math.random() * howMany;
     var randomInt = Math.round(randomFloat) % howMany+1;
     $cells.eq(randomInt).addClass('zabytek');
   }
 }
  $('td').eq(0).addClass('player');
  losowanie();


  $(document).keypress(function(event){
    var actualPosition =  $('.player');
    var newPosition;
    //console.log(event.which);
    if (event.which == 100)  {
      $('.player').removeClass('player').addClass('droga').next().addClass('player').removeClass('zabytek');
    }
    if (event.which == 97) {
      $('.player').removeClass('player').addClass('droga').prev().removeClass('droga').addClass('player').removeClass('zabytek');
    }
    if (event.which == 115) {
      var playerIndex = $('.player').index() +1 ;
      $('.player').removeClass('player').addClass('droga').parent().next().find(':nth-child(' + playerIndex + ')').addClass('player').removeClass('zabytek');
    }
    if (event.which == 119) {
      var playerIndex = $('.player').index() +1 ;
      $('.player').removeClass('player').addClass('droga').parent().prev().find(':nth-child(' + playerIndex + ')').addClass('player').removeClass('zabytek');
    }


    //Funkcja liczaca złapane zabytki


    var points = 20-($('.zabytek')).length;
       console.log(points);

    var pokonanaDroga =  $('.droga').length;

        if (pokonanaDroga > 20) {
          alert('Koniec zdobyles' +' ' + points + ' '+ 'punkty');
        }

    //Nie powtarzająca się droga





    //var playerIndex = $('.player').index();
    //console.log(playerIndex)
    //var playerParentIndex = $('.player').parent().index();
    //console.log(($('.player').parent()))




  });
});








