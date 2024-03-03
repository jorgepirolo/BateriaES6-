// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa',
  'Spiderman',
  'Harry Potter'
]

const swap = (array, num1, num2) => {
  ;[array[num1], array[num2]] = [array[num2], array[num1]]
  console.log(array)
}

swap(fantasticFour, 2, 3)
