export default function calculateDigit (checkDigit, number, auxValues) {
  const multipliedWeights = checkDigit.multiplyWeights(number)
  const calculatedModule = (auxValues.p + multipliedWeights) % checkDigit.module
  const subtractionByModule = Math.abs(calculatedModule - checkDigit.module)

  if (subtractionByModule === 10) return 0
  if (subtractionByModule === 11) return auxValues.d

  return subtractionByModule
}
