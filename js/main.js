var isX = true;

$(".gamecell").click(function() {
  var tgt = $(event.target);
  if (tgt.is('p')){
    return false;
  }
  tgt.html(setCell);
  playerSwitch();
  tgt.attr('class', 'gamecellClicked');
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
