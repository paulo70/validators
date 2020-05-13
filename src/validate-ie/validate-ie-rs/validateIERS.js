import ieBase from '../ieBase'

export default function validateIERS (value) {
  return ieBase(value, { numDigits: 1, valueLength: 10 })
}
