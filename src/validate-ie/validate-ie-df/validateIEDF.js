import ieBase from '../ieBase'

export default function validateIEDF (documentNumber) {
  return ieBase(documentNumber, { valueLength: 13, initialChars: '07' })
}
