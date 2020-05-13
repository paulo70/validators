import ieBase from '../ieBase'

export default function validateIEAM (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1 })
}
