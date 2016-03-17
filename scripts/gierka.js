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
    console.log(event.which);
    if (event.which == 100) {
      $('.player').next().addClass('player').prev().removeClass('player').addClass('droga');
    }
    if (event.which == 97) {
      $('.player').prev().removeClass('droga').addClass('player').next().removeClass('player').addClass('droga');
    }
  });
});








