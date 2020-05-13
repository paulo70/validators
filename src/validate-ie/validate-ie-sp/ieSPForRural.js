import toDigit from './toDigit'

import CheckDigit from '../../check-digit'

export default function ieSPForRural (value) {

  if (value.length !== 13) return false

  const number = value.substring(1, 9)
  const numberCheckDigit = value.charAt(9)

  const checkDigit = new CheckDigit({
    numDigits: 1,
    weights: [10, 8, 7, 6, 5, 4, 3, 1],
    withoutModuleComplement: true
  })

  if (toDigit(checkDigit.calculate(number)) !== numberCheckDigit) {
    return false
  }

  return true
}
