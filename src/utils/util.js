function getYearMonthDay (val) {
  val = new Date(val)
  return {
    year: val.getFullYear(),
    month: val.getMonth(),
    day: val.getDate()
  }
}

function getDate (year, month, day) {
  return new Date(year, month, day)
}
export {
  getYearMonthDay,
  getDate
}
