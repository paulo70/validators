import { toArray } from '../../helpers/'
import CheckDigit from '../../check-digit'

import calculateDigit from './calculateDigit'

export default function isCheckDigitValid (number) {
  const checkDigit = new CheckDigit ({ numDigits: 1 })
  const calculatedDigit = calculateDigit(checkDigit, number)
  const digit = checkDigit.extractDigits(number)

  return toArray(calculatedDigit).includes(parseInt(digit))
}
