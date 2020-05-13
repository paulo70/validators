import CheckDigit from '../../check-digit'

export default function validateSecondDigit (number) {
  const checkDigit = new CheckDigit({
    numDigits: 1,
    weights:  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  })

  return checkDigit.isValid(number)
}
