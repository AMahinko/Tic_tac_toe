var isX = true;

var xShow =
$(".gamecell").click(function() {
  var tgt = $(event.target);
  tgt.html(setCell);
  playerSwitch();
})


function playerSwitch() {
  if (isX === true) {
    isX = false;
    console.log(isX)
    return;
  }
  else {
    isX = true;
    console.log(isX)
    return;
  }
}

function setCell() {
  if (isX === true){
    return "<p class = 'X'> X </p>"
  }
  else {
    return "<p class = 'O'> O </p>"
  }
}
