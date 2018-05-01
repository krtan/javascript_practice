document.write("Reload time: " + Date.now())

document.write("<br /><div><h3>???</h3></div>")

//Take 2 arguments: Temperature and scale (c/F)

//Display temp with h3

//When user clicks on h3, convert temp

//Display converted temp

var temperature
var scale

function replaceTemperature() {
  document.querySelector("h3").innerHTML = `${temperature} ${scale}`;
}

function convertTemperature(){
  let tF;
  let tS;
  if ( scale == "C" ){
    tF = temperature * (9/5) + 32;
    tS = 'F';
  } else if ( scale == "F" ) {
    tF = (temperature - 32) / (9/5);
    tS = 'C';
  };
  temperature = tF.toFixed(2);
  scale = tS;
  replaceTemperature();
}

function promptTemperature(){
  let invalid_temp = true;
  do {
    let temp = prompt("What is the temperature? (### scale)");
    let check = 0;
    console.log(temp.split(" "));
    if (temp.split(" ").length == 2) {
      temperature = temp.split(" ")[0];
      if (!isNaN(temperature)) { //If temperature IS a number
        check = 1;
      }
      scale = temp.split(" ")[1].toUpperCase();
      if ( scale == 'C' || scale == 'F') {
        check += 1;
      }
      if (check == 2) {
        invalid_temp = false;
      }
    }
  } while (invalid_temp);
}


promptTemperature();
replaceTemperature();
document.querySelector("div").addEventListener('click', convertTemperature);

document.addEventListener("keypress", (e) => {
  console.log(e)
  if (e.key == "n") {
    promptTemperature();
    replaceTemperature();
  }});
