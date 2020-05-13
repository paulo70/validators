import ieBase from '../ieBase'

export default function validateIERD (value) {
  return ieBase(value, { numDigits: 1, valueLength: 14 })
}
