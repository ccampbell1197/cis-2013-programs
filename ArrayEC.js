// Task 1

var arrayNames = new Array('john', 'robert', 'Jimmy', 'Bonzo');

var arrayInstruments =[];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";

var stringMessage = "";

var intCount;

for(intCount=0; intCount < arrayNames.length; intCount++){
  stringMessage = stringMessage + arrayNames[intCount] +" " + "plays " + arrayInstruments[intCount]+ " .";
}

alert (stringMessage);

// task 2

var stringTimesTable = "";
for(var x = 1; x<=12; x++)
{
  for(var y= 1; y<=12; y++)
  {
    
    stringTimesTable = stringTimesTable + " " + (x*y)+ " ";
  }

    stringTimesTable = stringTimesTable +"\n";

}

alert(stringTimesTable);

//task 3

var arrayTimesTable = [];
var stringEvenTimes = "";

for(var x = 1; x<=12; x++)
{
  arrayTimesTable[x] = [];
  for(var y= 1; y<=12; y++)
  {
    arrayTimesTable[x][y] = x*y;
  }
}

//alert(arrayTimesTable);

for(var a=1; a<=12; a++){
if (a%2===0)

{
  for (var b=1; b<=12; b++)
  {
    stringEvenTimes = stringEvenTimes + " " +arrayTimesTable [a][b] + " ";
  }
  stringEvenTimes += "\n"
}
}

alert(stringEvenTimes);
