let x = []

function dwarfRollCall(dwarves) {
for (let i = 0; i < dwarves.length;  i++) {
 x += `${[i + 1]}` + '. ' + `${dwarves[i]}` + ' '
}
 return x;
}

  let array = []


function summonCaptainPlanet(planeteerCalls) {
  for (let i=0;i<planeteerCalls.length;i++) {
  array.push(`${planeteerCalls[i].toUpperCase()}!`)
}
return array
}


  var array = []

function longPlaneteerCalls(elements){


 for (let i = 0; i < elements.length;  i++){
  if (elements[i].length > 4){
  return true;
  }
 }
  return false;
}


let x = []

function findTheCheese(groceries){
var typesOfCheese = ['cheddar', 'gouda', 'camembert']

for (let i = 0; i < typesOfCheese.length;  i++){
for (let j = 0; j < groceries.length; j++){
  if (typesOfCheese[i] == groceries[j]){
    return typesOfCheese[i]
  }
}
}

return 'no cheese!';
}
