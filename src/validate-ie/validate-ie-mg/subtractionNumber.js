export default function subtractionNumber(number){
  const digit = ((Math.floor(number / 10) + 1)) * 10 - number

  return digit !== 10 ? digit : 0
}
