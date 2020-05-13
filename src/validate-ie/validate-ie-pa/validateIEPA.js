import ieBase from '../ieBase'

export default function validateIEPA (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1, initialChars: '15' })
}
