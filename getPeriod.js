function getPeriod (days){
  // days: number 
  const MS = 86400000 //一天的毫秒数
  let duration = days * MS
  let period = {}
  let today = new Date()
  period.end = new Date(today.getTime())
  period.start = new Date(today.getTime() - duration)
  return period
}
