import ieBase from '../ieBase'

export default function validateIEMA (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1, initialChars: '12' })
}
