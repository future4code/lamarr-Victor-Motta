console.log("exercicio 1");

// Ex 1: Crie um conversor de temperaturas para as escalas em Fahrenheit e Kelvin.

const convertCelsius = (celsius, Other) => {
  let celsiusToF = 0;
  let celsiusToK = 0;
  if (!isNaN(celsius) && Other === "F") {
    celsiusToF = celsius * 1.8 + 32;
    console.log(`${celsius} Celsius equivalente a ${celsiusToF} Farenheit.`);
  } else if (!isNaN(celsius) && Other === "K") {
    celsiusToK = celsius + 273;
    console.log(`${celsius} Celsius e equivalente a ${celsiusToK} Kelvin.`);
  } else if (isNaN(celsius)) {
    console.log(`Erro. Parâmetro inválido "${celsius}".`);
  } else {
    console.log(`Erro. Parâmetro inválido "${Other}".`);
  }
};

convertCelsius(30, "F");
convertCelsius(30, "K");
convertCelsius("X", "F");
convertCelsius(30, "NADA");
