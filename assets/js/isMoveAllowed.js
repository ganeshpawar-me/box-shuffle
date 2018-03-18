function isMoveAllowed (clickedDiv, previousDiv) {
  var allowedDivsContainer = [
                              ['div-1', 'div-3'],
                              ['div-0', 'div-4', 'div-2'],
                              ['div-1', 'div-5'],
                              ['div-0', 'div-4', 'div-6'],
                              ['div-1', 'div-3', 'div-5', 'div-7'],
                              ['div-2', 'div-4', 'div-8'],
                              ['div-3', 'div-7'],
                              ['div-6', 'div-4', 'div-8'],
                              ['div-5', 'div-7']
                            ];
  var innerCount;
  for(innerCount = 0; innerCount < allowedDivsContainer[previousDiv].length; innerCount++){
    if(clickedDiv === allowedDivsContainer[previousDiv][innerCount]) {
       return 1;
    }
  }
  return 0;
}
