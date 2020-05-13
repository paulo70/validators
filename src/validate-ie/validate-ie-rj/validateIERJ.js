import ieBase from '../ieBase'

export default function validateIERJ (value) {
  return ieBase(value, { numDigits: 1, valueLength: 8, weights: [2, 3, 4, 5, 6, 7] })
}
