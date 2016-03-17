var $table = $('<table>');
$('#app').append($table);
for (var y = 0; y < 5; y++) {
  var $tr = $('<tr>');
  $table.append($tr);
  for (var x = 0; x <5; x++) {
    var $td = $('<td>');
    $td.addClass('cell');
    $tr.append($td);
  }
}

