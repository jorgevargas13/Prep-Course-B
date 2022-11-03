// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    sum=0
    for (index = 1; index <= 10; index++) {
      sum+=index
      
    }
    return sum
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  arr = [];
  for(variable of array){
    if (variable%2 == 0){
      arr.push(variable)
    }
  }
  return arr
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  function cuad(el){
    return el**2
  }
  //var triple = numeros.map(multiplicarPorTres);
  return array.map(cuad);
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  sum=0
  for(variable of array){
    sum+=variable
  }
  return sum
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  
  digitos=0
  while(num>0){
    num=Math.trunc(num/10)
    digitos++
  }
  return digitos
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
