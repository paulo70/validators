import getCorrectDigit from './getCorrectDigit'

export default function calculateDigit (checkDigit, number) {
  const numberWithoutDigits = checkDigit.extractNumberWithoutDigits(number)
  const multipliedWeights = checkDigit.multiplyWeights(numberWithoutDigits)
  const calculatedModule = multipliedWeights % checkDigit.module
  const subtractionByModule = Math.abs(calculatedModule - checkDigit.module)
  const distinctCheckDigits = [0, 1]

  return distinctCheckDigits.includes(calculatedModule)
    ? getCorrectDigit(numberWithoutDigits, calculatedModule)
    : subtractionByModule
}
