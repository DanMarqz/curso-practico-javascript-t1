// Codigo del cuadrado
const perimetroCuadrado = ( lado ) => {
  return lado * 4;
}

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

// Pulgadas
const pulgadasCirculo = ( radio ) => {
  const diametro = diametroCirculo( radio );
  return diametro / 2.54;
}

// Interaccion con HTML
// Cuadrados
const ladoCuadrado = document.getElementById( 'ladoCuadrado' ),
      ladoTriangulo1 = document.getElementById( 'ladoTriangulo1' ),
      ladoTriangulo2 = document.getElementById( 'ladoTriangulo2' ),
      alturaTriangulo = document.getElementById( 'alturaTriangulo' ),
      baseTriangulo = document.getElementById( 'baseTriangulo' ),
      radioCirculo = document.getElementById( 'radioCirculo' );

const calcularPerimetroCuadrado = () => {
  let lado = ladoCuadrado.value,
      perimetro = perimetroCuadrado( lado );
  alert( perimetro )
}

const calcularAreaCuadrado = () => {
  let lado = ladoCuadrado.value,
      area = areaCuadrado( lado );    
  alert(area)
}

// Triangulos
const calcularPerimetroTriangulo = () => {
  let lado1 = ladoTriangulo1.value,
      lado2 = ladoTriangulo2.value,
      base = baseTriangulo.value,
      perimetro = perimetroTriangulo( lado1, lado2, base );

  alert(perimetro)
}

const calcularAreaTriangulo = () => {
  let base = baseTriangulo.value,
      altura = alturaTriangulo.value,
      area = areaTriangulo( base, altura );
  alert(area)
}

// Circulos
const calcularDiametroCirculo = () => {
  var radio = radioCirculo.value,
        diametro = diametroCirculo( radio );
  alert(diametro)
}

const calcularPerimetroCirculo = () => {
  let radio = radioCirculo.value,
      perimetro = perimetroCirculo( radio );
  alert(perimetro)
}

const calcularAreaCirculo = () => {
  let radio = radioCirculo.value,
      area = areaCirculo( radio );
  alert(area)
}

const calcularPulgadas = () => {
  let radio = radioCirculo.value,
      pulgadas = pulgadasCirculo( radio );
  alert(pulgadas)
}