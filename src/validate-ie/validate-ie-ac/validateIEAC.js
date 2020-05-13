import ieBase from '../ieBase'

export default function validateIEAC (documentNumber) {
  return ieBase(documentNumber, { initialChars: '01', valueLength: 13 })
}
