// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var AuxArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      AuxArray[i] = array[i] + 1;
    } else {
      return false;
    }
  }
  return AuxArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras[0];
  for(var i = 1; i<palabras.length; i++){
    frase = frase + " " + palabras[i];
  }
  return frase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var semaforo = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      semaforo = true;
    }
  }
  return semaforo;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (Number.isInteger(numeros[i])) {
      valor = valor + numeros[i];
    } else {
      return false;
    }
  }
  return valor;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  var suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    
    if (Number.isInteger(resultadosTest[i])) {
      suma = suma + resultadosTest[i];
    } else {
      return false;
    }
  }
  promedio = suma / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numMax = numeros[0]; // variable a devolver
  for (var i = 1; i < numeros.length; i++) { // recorro el array
  //  if (Number.isInteger(numeros[i])) { // compruebo que el contenido sea integer
      if (numMax < numeros[i]) { // comparo 
        numMax = numeros[i];
      }
  //  } else {
  //    return false; // si no es entero corto devolviendo false
  //  }
  }
  return numMax; 
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var total = 1;
  if (arguments.length < 1) return 0;
  for (var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
