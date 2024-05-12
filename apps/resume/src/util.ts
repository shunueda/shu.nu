export function interleave<T>(arr: T[], x: T): T[] {
  return arr.flatMap(e => [e, x]).slice(0, -1)
}
