var i = 0; //To store first click or last click.
var j = 0; //To initially allow clicks till j < 6.
var previousDiv = 0;
var previousColor = 'white';
var colorCodes = ['white', 'white', 'white',
                  'white', 'white', 'white',
                  'white', 'white', 'white',
                  i, previousDiv, previousColor];//initialized array to store color code of each box
  $("div[class^='div-']").click(function() {
    var clickedDiv = $(this).attr('class');
    var clickedDivNum = parseInt(clickedDiv[4], 10);
    if (j <  6) {
      if(colorCodes[clickedDivNum] === 'white') {
        if(j % 2 === 0) {
          $(this).css('background-color', 'blue');
          colorCodes[clickedDivNum] = 'blue';
        } else {
          $(this).css('background-color', '#f44336');
          colorCodes[clickedDivNum] = '#f44336';
        }
        j += 1; //to change color of clicked boxes i.e. blue or #f44336.
      } else {
        alert('Please select an Empty Box.');
      }
    } else {
      if(i === 0) {
        if(colorCodes[clickedDivNum] === 'white') {
            alert('Please select a colored box');
        } else {
          colorCodes[11] = colorCodes[clickedDivNum];
          colorCodes[10] = clickedDivNum;
          i++;
          var colorReseter = '.' + clickedDiv;
          colorCodes[clickedDivNum] = colorCodes[11];
          $(colorReseter).css('background-color', '#ffffff');
        }
      } else {
        if(colorCodes[clickedDivNum] === 'white') {
          var isMoveAllowedHere = isMoveAllowed(clickedDiv, colorCodes[10]);
          if (isMoveAllowedHere) {
            var colorReseter = '.' + clickedDiv;
            $(colorReseter).css('background-color', colorCodes[11]);
            colorCodes[clickedDivNum] = colorCodes[11];
            colorCodes[colorCodes[10]] = 'white';
            var anotherColorReseter = ".div-" + colorCodes[10].toString();
            $(anotherColorReseter).css('background-color', '#ffffff');
            colorCodes[11] = 'white';
            colorCodes[10] = 0;
            i--;
          } else {
          alert("invalid move");
          var colorSelector = '.div-' + colorCodes[10];
          $(colorSelector).css('background-color', colorCodes[11]);
          i--;
          }
        } else {
          alert('select an Empty Box.');
          var colorSelector = '.div-' + colorCodes[10];
          $(colorSelector).css('background-color', colorCodes[11]);
          i--;
        }
      }
    }
    var winner = checkWinner();
    if( winner != 0){
      alert('Player ' + winner + ' win.');

      for (count = 0; count < 9; count++) {
        colorCodes[count] = 'white';
        colorReseter = '.div-' + count.toString();
        $(colorReseter).css('background-color', '#ffffff');
      }
      j = 0;
    }
    console.log(colorCodes);
  });//end of .click function
