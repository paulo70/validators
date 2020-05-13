export default function toArray (arg) {
  return Array.isArray(arg) ? Array.from(arg) : [arg]
}
