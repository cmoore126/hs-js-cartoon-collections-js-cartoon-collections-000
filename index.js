function dwarfRollCall(dwarves) {
var x = []
for (var i = 0; i < dwarves.length;  i++) {
 x += `${[i + 1]}` + '. ' + `${dwarves[i]}` + ' '
}
 return x;
}

function summonCaptainPlanet(planeteerCalls) {
  var array = []
  for (var i=0;i<planeteerCalls.length;i++) {
  array.push(`${planeteerCalls[i].toUpperCase()}!`)
}
return array
}

function longPlaneteerCalls(elements){
  var x = []
 for (var i = 0; i < elements.length;  i++){
  if (elements[i].length > 4){
  return true;
  }
 }
  return false;
}

function findTheCheese(groceries){
var typesOfCheese = ['cheddar', 'gouda', 'camembert']
var x = []
for (var i = 0; i < typesOfCheese.length;  i++){
for (var j = 0; j < groceries.length; j++){
  if (typesOfCheese[i] == groceries[j]){
    return typesOfCheese[i]
  }
}
}

return 'no cheese!';
}
