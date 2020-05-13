import CheckDigit from '../check-digit'

export default function validateSUFRAMA (document) {
  const lengths = [8, 9]
  const numDigits = 1
  const weights = [2, 3, 4, 5, 6, 7, 8, 9]
  const digit = document.replace(/[^\d]+/g, '')
  const checkDigit = new CheckDigit({ weights, numDigits })

  if (!lengths.includes(digit.length)) return false
  if (digit.substring(0, 2) === '00')  return false

  return checkDigit.isValid(digit)
}
