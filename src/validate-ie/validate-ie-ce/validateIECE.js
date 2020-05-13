import ieBase from '../ieBase'

export default function validateIECE (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1 })
}
