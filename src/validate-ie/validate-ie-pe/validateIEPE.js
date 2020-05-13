import ieBase from '../ieBase'

export default function validateIEPE (documentNumber) {
  return ieBase(documentNumber, { numDigits: 2 })
}
