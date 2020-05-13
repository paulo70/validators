import ieBase from '../ieBase'

export default function validateIEPB (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1 })
}
