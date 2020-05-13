export default function toDigit (number) {
  const numberString = number.toString()

  return numberString.charAt(numberString.length - 1)
}
