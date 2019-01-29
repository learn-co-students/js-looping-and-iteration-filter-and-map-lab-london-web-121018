// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter( driver => driver.revenue > revenue )
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(driver => driver.name)
}

function exactMatch(array, object) {
  return array.filter ( driver => driver.name === object.name || driver.revenue === object.revenue )
}

let exactMatchToList = (array, object) => {
  return exactMatch(array, object).map( driver => driver.name )
}
