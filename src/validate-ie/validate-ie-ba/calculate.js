export default function calculate (firstCheckDigit, secondCheckDigit, number) {
  const secondDigit = secondCheckDigit.calculate(number)
  const firstDigit = firstCheckDigit.calculate(number.concat(secondDigit))

  return [firstDigit, secondDigit]
}
