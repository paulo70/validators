import CheckDigit from '../check-digit'

export default function validateCNPJ (value) {
  const length = 14
  const documentNumber = value.replace(/[^\d]+/g, '')
  const checkDigit = new CheckDigit()

  return documentNumber.length === length && checkDigit.isValid(documentNumber)
}
