var x = []

function dwarfRollCall(dwarves) {
for (var i = 0; i < dwarves.length;  i++) {
 x += `${[i + 1]}` + '. ' + `${dwarves[i]}` + ' '
}
 return x;
}

  var array = []


function summonCaptainPlanet(planeteerCalls) {
  for (var i=0;i<planeteerCalls.length;i++) {
  array.push(`${planeteerCalls[i].toUpperCase()}!`)
}
return array
}


  var array = []

function longPlaneteerCalls(elements){


 for (var i = 0; i < elements.length;  i++){
  if (elements[i].length > 4){
  return true;
  }
 }
  return false;
}


var x = []

function findTheCheese(groceries){
var typesOfCheese = ['cheddar', 'gouda', 'camembert']

for (var i = 0; i < typesOfCheese.length;  i++){
for (var j = 0; j < groceries.length; j++){
  if (typesOfCheese[i] == groceries[j]){
    return typesOfCheese[i]
  }
}
}

return 'no cheese!';
}
