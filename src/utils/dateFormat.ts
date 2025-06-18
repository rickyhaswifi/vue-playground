import { useDateFormat } from '@vueuse/core'
export const formateDate = (date: string) => {
  return useDateFormat(date, 'MMMM/DD/YYYY', { locales: 'en-US' })
}
export const formateDay = (date: string) => {
  return useDateFormat(date, 'DD', { locales: 'en-US' })
}
export const formateMonth = (date: string) => {
  return useDateFormat(date, 'MMM', { locales: 'en-US' })
}
export const formateYear = (date: string) => {
  return useDateFormat(date, 'YYYY', { locales: 'en-US' })
}
