import moment from 'moment'

export function isoToDate (iso, format = 'MM/DD/YY') {
  let date = new Date(iso)
  return moment(date).format(format)
}
