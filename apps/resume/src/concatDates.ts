export default function concatDates<
  T extends {
    start_date: string
    end_date: string
  }
>(data: T): string {
  return `${data.start_date} - ${data.end_date}`
}
