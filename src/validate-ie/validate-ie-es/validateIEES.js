import ieBase from '../ieBase'

export default function validateIEES (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1 })
}
