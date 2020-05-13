import CheckDigit from '../check-digit'

export default function validateCPF (document) {
  const digit = document.replace(/[^\d]+/g, '')
  const length = 11
  const weights = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const checkDigit = new CheckDigit({ weights: weights })

  return digit.length === length && checkDigit.isValid(digit)
}
