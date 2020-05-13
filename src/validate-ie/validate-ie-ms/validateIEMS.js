import ieBase from '../ieBase'

export default function validateIEMS (documentNumber) {
  return ieBase(documentNumber, { numDigits: 1, initialChars: '28' })
}
