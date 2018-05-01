//Take 2 arguments: Temperature and scale (c/F)

//Display temp with h3

//When user clicks on h3, convert temp

//Display converted temp

document.write("<div><h3></h3></div>");

// Set default scale based on region...kind of :3
function setUnitSystem() {
  if (window.navigator.language == 'en-US'){
    console.log('Pffft...Imperial system noob');
    scale = 'F';
  } else {
    scale = 'C';
  };
  console.log(`Set scale to: ${scale}`)
  return scale
};

function replaceTemperature(temperature, scale) {
  document.querySelector("h3").innerHTML = `<span id="temperature">${temperature}</span> <span id="scale">${scale}</span>`;
  console.log(`Replacing website html.`)
}

function readTemperature(){
  let temperature = document.querySelector("#temperature").innerHTML;
  let scale = document.querySelector("#scale").innerHTML;
  console.log(`Read temperature: ${temperature} ${scale}`);
  return [temperature, scale];
}

function convertTemperature(temperature, scale){
  console.log(`Converting from: ${temperature} ${scale}`)
  if ( scale == "C" ){
    temperature = temperature * (9/5) + 32;
    scale = 'F';
  } else if ( scale == "F" ) {
    temperature = (temperature - 32) / (9/5);
    scale = 'C';
  };
  temperature = temperature.toFixed(2);
  console.log(`Converted to: ${temperature} ${scale}`)
  return [temperature, scale];
}

function promptTemperature(){
  let temp = prompt("What is the temperature?");
  let temperature;
  let scale;
  if (temp) {
    if ( temp.match(/(\d+)(| )(|([cf]))/gi) ){
      temperature = parseInt(temp.match(/(\d+)/gi)[0]).toFixed(2);
      if (temp.match(/([cf])/gi)) {
        scale = temp.match(/([cf])/gi)[0].toUpperCase();
      } else {
        setUnitSystem();
      };
    };
  };
  if (!(temperature && scale)) {
    alert("Missing temperature, Press 'n' to prompt again.");
  };
  return [temperature, scale];
};

function onClick(){
  temperature_array = readTemperature();
  temperature_array = convertTemperature(temperature_array[0], temperature_array[1]);
  replaceTemperature(temperature_array[0], temperature_array[1]);
}

let temperature_array;
temperature_array = promptTemperature();
replaceTemperature(temperature_array[0], temperature_array[1]);

// UI bindings
document.querySelector("div").addEventListener('click', onClick);
document.addEventListener("keypress", (e) => {
  console.log(e)
  if (e.key == "n") {
    temperature_array = promptTemperature();
    replaceTemperature(temperature_array[0], temperature_array[1]);
  }});
