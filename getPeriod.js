function getPeriod (days){
  // days: number 
  const MS = 86400000
  let during = days * MS
  let period = {}
  let today = new Date()
  period.start = new Date(today.getTime())
  period.end = new Date(today.getTime() - during)
  return period
}