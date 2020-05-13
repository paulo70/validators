import CheckDigit            from '../../check-digit'
import addZeroToNumber      from './addZeroToNumber'
import sumMultipliedNumbers from './sumMultipliedNumbers'
import subtractionNumber    from './subtractionNumber'

export default function validateFirstDigit (number) {
  const checkDigit          = new CheckDigit()
  const digits              = checkDigit.extractDigits(number)
  const numberWithoutDigits = checkDigit.extractNumberWithoutDigits(number)
  const numberWithZero      = addZeroToNumber(numberWithoutDigits)
  const sum                 = sumMultipliedNumbers(numberWithZero)
  const firstDigit          = subtractionNumber(sum)

  return firstDigit === parseInt(digits[0])
}
