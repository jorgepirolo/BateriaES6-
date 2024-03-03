// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

const findArrayIndex = (array, text) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i //!no entiendo por que con el uso del return no sale en consola pero si se queda el valor para usarlo en la 2da funcion
    }
  }
}

findArrayIndex(mainCharacters, 'Rey')

const removeItem = (array, text) => {
  erase = findArrayIndex(array, text)
  if (erase !== undefined) {
    array.splice(erase, 1)
  }
  console.log(array)
}

removeItem(mainCharacters, 'Leia')

// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.
