const replacements: Record<string, string> = {
  '&': '\\&',
  '%': '\\%',
  $: '\\$',
  '#': '\\#',
  _: '\\_',
  '{': '\\{',
  '}': '\\}',
  '~': '\\textasciitilde{}',
  '^': '\\textasciicircum{}',
  '\\': '\\textbackslash{}'
}

export default function escapeLatex(text: string): string {
  return text.replace(/[&%$#_{}~^\\]/g, match => replacements[match])
}
