
// var rHeight =5;
// var colorEven = "Light Blue";
// var colorOdd = "Pink";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upLeft (pHeight, pColorEven, pColorOdd, pSymbol);
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downLeft(pHeight, pColorEven,pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}

function upLeft (pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine = "<div style='border: 2px solid rgba(0, 0, 0, 0); padding: 6px; display: inline-block;'>";
  for (i=0;i<pHeight;i++){
  rLine += "<p style='text-align:right;'>";
  for(j=0;j<=i;j++){

  if (j%2)
  rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
  else
  rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
  }
    
  rLine +="</p>";
  }

  document.getElementById("upLeft").innerHTML = rLine;
  }

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="<div style='border: 2px solid rgba(0, 0, 0, 0); padding: 6px; display: inline-block;'>";
for (i=0;i<pHeight;i++){
rLine +="<p>";
for(j=0;j<=i;j++){

if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine = "<div style='border: 2px solid rgba(0, 0, 0, 0); padding: 6px; display: inline-block;'>";
for (i=pHeight;i > 0;i--){
rLine += "<p style='text-align:right;'>";
for(j=0;j<i;j++){
  
if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

}
rLine +="</p>";
}

document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="<div style='border: 2px solid rgba(0, 0, 0, 0); padding: 6px; display: inline-block;'>";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
for(j=0;j<i;j++){


if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("downRight").innerHTML = rLine;
}
