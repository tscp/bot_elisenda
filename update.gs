function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Resource");
  sheet.deleteColumn(2);
  sheet.insertColumnsAfter(sheet.getLastColumn(), 1);
  sheet.getRange(String(ConvertToLetter(sheet.getLastColumn()-1))+':'+String(ConvertToLetter(sheet.getLastColumn()-1))).copyTo(sheet.getRange(String(ConvertToLetter(sheet.getLastColumn()))+'1'));
}

/* ref: http://hiyonomemo.blogspot.jp/2015/05/google-spreadsheet.html */
function ConvertToLetter(iCol) {
  var str = "";
  var iAlpha = 0;
  var iRemainder = 0;

  iAlpha = parseInt((iCol / 26), 10);
  iRemainder = iCol - (iAlpha * 26);
  if(iAlpha > 0) {
    str = String.fromCharCode(iAlpha + 64);
  }
  if(iRemainder >= 0) {
    str = str + String.fromCharCode(iRemainder + 65);
  }
  return str;
}
