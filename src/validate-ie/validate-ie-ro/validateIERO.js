import ieBase from '../ieBase'

export default function validateIERO (value) {
  return ieBase(value, {
    numDigits: 1,
    valueLength: 14,
    weights: [2, 3, 4, 5, 6, 7, 8, 9]
  })
}
