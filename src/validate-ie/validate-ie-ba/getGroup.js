export default function getGroup (number, length) {
  const group = [0, 1, 2, 3, 4, 5, 8]
  const char = length === 8
    ? parseInt(number.charAt(0))
    : parseInt(number.charAt(1))

  return group.includes(char) ? 1 : 2
}
