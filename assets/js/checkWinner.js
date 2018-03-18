//unoptimized checkWinner function
function checkWinner() {

  //box number 0 1 2
  if(colorCodes[0] === colorCodes[1] && colorCodes[0] === colorCodes[2]) {
    if(colorCodes[0] === 'blue') {
      return 1;
    }
    if(colorCodes[0] === '#f44336') {
      return 2;
    }
  }
  //end of 0 1 2

  //box number 3 4 5
  if(colorCodes[3] === colorCodes[4] && colorCodes[3] === colorCodes[5]) {
    if(colorCodes[3] === 'blue') {
      return 1;
    }
    if(colorCodes[3] === '#f44336') {
      return 2;
    }
  }
  //end of 3 4 5

  //box number 6 7 8
  if(colorCodes[6] === colorCodes[7] && colorCodes[6] === colorCodes[8]) {
    if(colorCodes[6] === 'blue') {
      return 1;
    }
    if(colorCodes[6] === '#f44336') {
      return 2;
    }
  }
  //end of 6 7 8

  //box number 0 3 6
  if(colorCodes[0] === colorCodes[3] && colorCodes[0] === colorCodes[6]) {
    if(colorCodes[0] === 'blue') {
      return 1;
    }
    if(colorCodes[0] === '#f44336') {
      return 2;
    }
  }
  //end of 0 3 6

  //box number 1 4 7
  if(colorCodes[1] === colorCodes[4] && colorCodes[1] === colorCodes[7]) {
    if(colorCodes[1] === 'blue') {
      return 1;
    }
    if(colorCodes[1] === '#f44336') {
      return 2;
    }
  }
  //end of 1 4 7

  //box number 2 5 8
  if(colorCodes[2] === colorCodes[5] && colorCodes[2] === colorCodes[8]) {
    if(colorCodes[2] === 'blue') {
      return 1;
    }
    if(colorCodes[2] === '#f44336') {
      return 2;
    }
  }
  //end of 2 5 8

  //box number 0 4 8
  if(colorCodes[0] === colorCodes[4] && colorCodes[0] === colorCodes[8]) {
    if(colorCodes[0] === 'blue') {
      return 1;
    }
    if(colorCodes[0] === '#f44336') {
      return 2;
    }
  }
  //end of 3 4 5

  //box number 3 4 5
  if(colorCodes[2] === colorCodes[4] && colorCodes[2] === colorCodes[6]) {
    if(colorCodes[2] === 'blue') {
      return 1;
    }
    if(colorCodes[2] === '#f44336') {
      return 2;
    }
  }
  //end of 3 4 5
  return 0;
}
