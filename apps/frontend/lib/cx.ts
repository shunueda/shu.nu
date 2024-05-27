export default function cx(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
