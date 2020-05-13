import CheckDigit from '../../check-digit'

import defineCheckDigitOptions from './defineCheckDigitOptions'

export default function defineCheckDigits (group, numberLength) {
  return [
    new CheckDigit(defineCheckDigitOptions(1, group, numberLength)),
    new CheckDigit(defineCheckDigitOptions(2, group, numberLength))
  ]
}
