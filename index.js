// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
    let names = [];
    drivers.map(function(driver){
        if (driver.revenue > revenue){
            names.push(driver.name);
        }
    });
    return names
}

function exactMatch(array, value){
    return array.filter(driver => driver.name == value.name || driver.revenue === value.revenue);
}

function exactMatchToList(extendedDrivers, value){
    let matchList = [];
    for (const key in extendedDrivers){
        if (typeof extendedDrivers[key] === 'object') {
          for (const nestedKey in extendedDrivers[key]) {
            if (extendedDrivers[key][nestedKey] === Object.values(value).flat()[0]){
                matchList.push(extendedDrivers[key].name);
            }
          }
        }
    }
    return matchList;
}