import CheckDigit from '../../check-digit'
import calculateDigit from './calculateDigit'
import getAuxValues from './getAuxValues'

export default function isCheckDigitValid (number) {
  const checkDigit = new CheckDigit ({ numDigits: 1 })
  const numberWithoutDigits = checkDigit.extractNumberWithoutDigits(number)
  const auxValues = getAuxValues(numberWithoutDigits)
  const calculatedDigit = calculateDigit(checkDigit, numberWithoutDigits, auxValues)
  const digit = checkDigit.extractDigits(number)

  return parseInt(digit) === calculatedDigit
}
