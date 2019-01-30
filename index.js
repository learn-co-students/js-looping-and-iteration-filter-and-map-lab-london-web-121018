// Code your solution here:
let driversWithRevenueOver = (drivers, amt) =>
    drivers.filter(driver => driver.revenue > amt)

let driverNamesWithRevenueOver = (drivers, amt) =>
    driversWithRevenueOver(drivers, amt).map(driver => driver.name)

let exactMatch = (drivers, obj) =>
    drivers.filter(driver => driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]])

let exactMatchToList = (drivers, obj) =>
    exactMatch(drivers, obj).map(driver => driver.name)