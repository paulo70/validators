export default function getCorrectDigit (number, calculatedModule) {
  const intNumber = parseInt(number)

  if (intNumber === 11094402) {
    return [0, 1]
  }

  if (calculatedModule === 0) {
    return 0
  }

  if (calculatedModule === 1 && intNumber >= 10103105 && intNumber <= 10119997) {
    return 1
  }

  if (calculatedModule === 1 && intNumber < 10103105 || intNumber > 10119997) {
    return 0
  }
}
