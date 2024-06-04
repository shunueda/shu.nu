export function formatDateToLatex(startDate?: string, endDate?: string) {
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short'
  }
  const formatMonthYear = (dateStr: string) => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat('en-US', formatOptions).format(date)
  }
  if (startDate && endDate) {
    return `${formatMonthYear(startDate)} -- ${formatMonthYear(endDate)}`
  }
  return startDate ? `${formatMonthYear(startDate)} -- Present` : ''
}
