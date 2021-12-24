// Codigo del cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;
console.log(
  `Los lados del cuadrado miden: ${ladoCuadrado} cm.`
);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(
  `El perimetro del cuadrado es: ${perimetroCuadrado} cm.`
);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(
  `El area del cuadrado es: ${areaCuadrado} cm.`
);
console.groupEnd();

// Codigo del triangulo
console.group('Triangulo');

const ladoTriangulo1 = 6,
      ladoTriangulo2 = 6,
      baseTriangulo = 4;
console.log(
  `Los lados del triangulo miden: ${ladoTriangulo1} cm, 
  ${ladoTriangulo2} cm 
  y la base ${baseTriangulo} cm.`
)

const alturaTriangulo = 5.5;
console.log(
  `La altura del triangulo es: ${alturaTriangulo} cm.`
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(
  `El perimetro del cuadrado es: ${perimetroTriangulo} cm.`
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(
  `El area del triangulo es: ${areaTriangulo} cm2.`
)

console.groupEnd();

// Codigo del Circulo
console.group('Circulos');

// Radio
const radioCirculo = 4;


// Diametro
const diametroCirculo = radioCirculo * 2;
console.log(
  `El diametro del triangulo es: ${diametroCirculo} cm.`
)

// Pi
const pi = Math.PI;
console.log(
  `El valor de PI es: ${pi}.`
)

// Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log(
  `El perimetro del circulo es: ${perimetroCirculo} cm.`
)

// Area
const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log(
  `El area del circulo es: ${areaCirculo} cm2.`
)

console.groupEnd();