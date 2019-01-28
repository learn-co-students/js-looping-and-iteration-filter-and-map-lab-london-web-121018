// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) {
        return driver.revenue > revenue;
    });
};

function driverNamesWithRevenueOver(drivers, revenue) {
    let driversA = driversWithRevenueOver(drivers, revenue)
    
    if (driversA.length !== 0) {
        return driversA.map(function (driver) {
        return driver.name
        })
    }
     else {
        return driversA
        }
};

function exactMatch(drivers, Obj) {
     debugger
    return drivers.filter(function (driver) {
        return driver[Object.keys(Obj)] === Obj[Object.keys(Obj)];
    });
    
    
};

function exactMatchToList(Drivers, Obj) {
    filtdrivers = exactMatch(Drivers, Obj);

    return filtdrivers.map(function (driver) {
        return driver.name
    });
};