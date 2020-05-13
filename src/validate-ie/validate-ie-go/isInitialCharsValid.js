export default function isInitialCharsValid (number, initialChars) {
  return initialChars.includes(number.substring(0, 2))
}
