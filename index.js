// Code your solution here:
let driversWithRevenueOver = (drivers, revenue) => {

    return drivers.filter(d => d.revenue > revenue)
}

let driverNamesWithRevenueOver = (drivers, revenue) => {
    filteredDrivers = driversWithRevenueOver(drivers, revenue)
    return filteredDrivers.map(d => d.name)
}

let exactMatch = (drivers, condition) => {
    key = Object.keys(condition).toString()
    debugger
    return drivers.filter(d => d[key] === condition[key])
}

let exactMatchToList = (drivers, condition) => {
    filteredDrivers = exactMatch(drivers, condition)
    return filteredDrivers.map(d => d.name)
}