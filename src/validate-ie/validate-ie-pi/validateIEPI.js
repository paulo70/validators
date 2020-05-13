import ieBase from '../ieBase'

export default function validateIEPI (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1 })
}
