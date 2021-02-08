let listaInput = ["BRA", "USA", "MEX", "ENG", "BRA", "COL"];
let listaOutput = [];

for(let y = 0; y < listaInput.length; y++) {

  if(listaInput[y] == "BRA" && y > 0) {
    listaInput.splice(y, 1);
  }
  
  console.log(listaInput[y]);
}