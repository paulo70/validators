export default function addZeroToNumber (number) {
  const countyCode         = number.substring(0, 3)
  const companyOrderNumber = number.substring(3, 11)

  return `${countyCode}0${companyOrderNumber}`
}
