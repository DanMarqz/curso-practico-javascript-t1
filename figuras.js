// Codigo del cuadrado

const perimetroCuadrado = ( lado ) => {
  return lado * 4;
}

// const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ( lado ) => {
  return lado * lado;
} 

// Codigo del triangulo

const perimetroTriangulo = ( lado1 , lado2 , base ) => {
  return lado1 + lado2 + base;
}

const areaTriangulo = ( base , altura ) => {
  return ( base * altura ) / 2;
}

// Codigo del Circulo

// Diametro
const diametroCirculo = ( radio ) => {
  return radio * 2
};

// Pi
const pi = Math.PI;

// Circunferencia
const perimetroCirculo = ( radio ) => {
  const diametro = diametroCirculo( radio );
  return pi * diametro;
};

// Area
const areaCirculo = ( radio ) => {
  return (radio * radio) * pi;
}