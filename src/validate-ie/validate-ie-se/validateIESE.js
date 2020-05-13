import ieBase from '../ieBase'

export default function validateIESE (value) {
  return ieBase(value, { numDigits: 1 })
}
