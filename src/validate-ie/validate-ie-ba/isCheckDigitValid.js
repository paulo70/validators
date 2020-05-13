// import CheckDigit from '../../check-digit'

import getGroup from './getGroup'
import defineCheckDigits from './defineCheckDigits'
import calculate from './calculate'

export default function isCheckDigitValid (number) {
  const group = getGroup(number, number.length)
  const checkDigits = defineCheckDigits(group, number.length)
  const numberWithoutDigit = checkDigits[0].extractNumberWithoutDigits(number)
  const digits = checkDigits[0].extractDigits(number)
  const calculatedDigits = calculate(...checkDigits, numberWithoutDigit)

  return (
    parseInt(digits.charAt(0)) === calculatedDigits[0] &&
    parseInt(digits.charAt(1)) === calculatedDigits[1]
  )
}
