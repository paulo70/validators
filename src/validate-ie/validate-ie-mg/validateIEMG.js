import validateFirstDigit  from './validateFirstDigit'
import validateSecondDigit from './validateSecondDigit'

export default function validateIEMG (value) {
  const number = value.replace(/[^\d]+/g, '')

  if (number.length !== 13) return false

  return validateFirstDigit(number) && validateSecondDigit(number) || false
}
