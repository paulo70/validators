import ieBase from '../ieBase'

export default function validateIERN (value) {
  return ieBase(value, {
    numDigits: 1,
    initialChars: '20',
    weights: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    valueLength: [9, 10]
  })
}
