export default function defineCheckDigitOptions (digit, group, numberLength) {
  return [
    {
      module: group === 1 ? 10 : 11,
      weights: numberLength === 8 ? [2, 3, 4, 5, 6, 7, 8] : [2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
      module: group === 1 ? 10 : 11,
      weights: numberLength === 8 ? [2, 3, 4, 5, 6, 7] : [2, 3, 4, 5, 6, 7, 8]
    }
  ][digit - 1]
}
