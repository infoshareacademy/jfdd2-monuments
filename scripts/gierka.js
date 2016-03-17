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
     var howMany = $cells.length;
     var randomFloat = Math.random() * howMany;
     var randomInt = Math.round(randomFloat) % howMany;
     console.log(randomInt);
     $cells.eq(randomInt).addClass('zabytek');
   }
 }
  losowanie();
});








