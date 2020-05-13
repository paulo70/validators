export default function getAuxValues (number) {
  const intNumber = parseInt(number)

  if (intNumber >= 3000001 && intNumber <= 3017000) return { p: 5, d: 0 }
  if (intNumber >= 3017001 && intNumber <= 3019022) return { p: 9, d: 1 }

  return { p: 0, d: 0 }
}
