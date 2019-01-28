// Code your solution here:
function driversWithRevenueOver(object, revenue){
  const drivers = object.filter (driver => driver.revenue > revenue);
  return drivers;
}

function driverNamesWithRevenueOver(object, revenue){
  const driversarray = driversWithRevenueOver(object, revenue);
  const names = driversarray.map(driver => driver['name'])
  return names;
}

function exactMatch(drivers, attribute){
  const x = drivers.filter (driver => driver[Object.keys(attribute)] === attribute[Object.keys(attribute)])
  return x;
}

function exactMatchToList(drivers, attribute){
  const driversarray = exactMatch(drivers, attribute);
  const names = driversarray.map(driver => driver['name'])
  return names;
}
