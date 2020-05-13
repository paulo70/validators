import ieBase from '../ieBase'

export default function validateIEMT (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1, valueLength: 11 })
}
