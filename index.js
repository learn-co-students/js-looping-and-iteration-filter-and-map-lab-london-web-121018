// Code your solution here:

const driversWithRevenueOver = (driver, revenue) => {
  return driver.filter(obj => obj.revenue > revenue)
}

function driverNamesWithRevenueOver (driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(obj => obj.name)
}

const exactMatch = function (driver, att) {
  let key1 = Object.keys(att)[0]
  let newArr = [];
//   debugger; 
  newArr = driver.filter(function (obj) {
    if (obj[key1]) {
        
      return obj[key1] === att[key1]
    }
  })
//   debugger; 
  return newArr
  
}

function exactMatchToList(driver, att) {
    return exactMatch(driver, att).map( obj => obj.name)
}