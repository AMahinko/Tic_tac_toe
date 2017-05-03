var isX = true;
var gameover = false;

$(".gamecell").click(function() {
if (gameover == true) {
    return false
}
else {

  var tgt = $(event.target);
  if (tgt.is('p')){
    return false;
  }
  tgt.html(setCell);
  setScore();
  playerSwitch();
  tgt.attr('class', 'gamecellClicked');
  winCheck();
}
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

function setScore() {
  if (isX == true){
    score[event.target.id] = 1;
  }
  else {
    score[event.target.id] = 10;
  }
}

function xWin(){
  $('#xwin_message').html('<h1>Player 1 wins!</h1>');
  gameover = true;
}

function oWin(){
  $('#owin_message').html('<h1>Player 2 wins!</h1>');
  gameover = true;
}


var score = {
  "1x1": null,
  "1x2": null,
  "1x3": null,
  ///
  "2x1": null,
  "2x2": null,
  "2x3": null,
  ///
  "3x2": null,
  "3x1": null,
  "3x3": null,
};

function winCheck() {
  if (score["1x1"] + score['1x2'] + score ['1x3'] == 3) {
    xWin();
  }
  else if (score["2x1"] + score['2x2'] + score ['3x3'] == 3) {
    xWin();
  }
  else if (score["3x1"] + score['3x2'] + score ['3x3'] == 3) {
    xWin();
  }

  if (score["1x1"] + score['2x1'] + score ['3x1'] == 3) {
    xWin();
  }
  else if (score["1x2"] + score['2x2'] + score ['3x2'] == 3) {
    xWin();
  }
  else if (score["1x3"] + score['2x3'] + score ['3x3'] == 3) {
    xWin();
  }
  ///
  if (score["1x1"] + score['2x2'] + score ['3x3'] == 3) {
    xWin();
  }
  else if (score["1x3"] + score['2x2'] + score ['1x3'] == 3) {
    xWin();
  }
  ///
  if (score["1x1"] + score['1x2'] + score ['1x3'] == 30) {
    oWin();
  }
  else if (score["2x1"] + score['2x2'] + score ['3x3'] == 30) {
    oWin();
  }
  else if (score["3x1"] + score['3x2'] + score ['3x3'] == 30) {
    oWin();
  }

  if (score["1x1"] + score['2x1'] + score ['3x1'] == 30) {
    oWin();
  }
  else if (score["1x2"] + score['2x2'] + score ['3x2'] == 30) {
    oWin();
  }
  else if (score["1x3"] + score['2x3'] + score ['3x3'] == 30) {
    oWin();
  }
  if (score["1x1"] + score['2x2'] + score ['3x3'] == 30) {
    oWin();
  }
  else if (score["1x3"] + score['2x2'] + score ['1x3'] == 30) {
    oWin();
  }
}
